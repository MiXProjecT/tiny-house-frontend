import React, { useEffect, useMemo } from "react";
import { Redirect } from "react-router-dom";
import {
  Viewer,
  useAuthUrlLazyQuery,
  useLogInMutation,
} from "lib/graphql/generated";
import { Spin } from "antd";
import { ErrorBanner } from "components";
import { displaySuccessNotification, displayErrorMessage } from "utils";
import googleLogo from "./assets/google_logo.png";
import {
  Container,
  LogInSection,
  Intro,
  IntroTitle,
  IntroText,
  GoogleButton,
  GoogleButtonLogo,
  GoogleButtonText,
  Note,
} from "./style";

interface Props {
  setViewer: (viewer: Viewer) => void;
}

const Login = ({ setViewer }: Props): JSX.Element => {
  const [
    getAuthUrl,
    { data: authData, error: authError },
  ] = useAuthUrlLazyQuery();
  const [
    logIn,
    { data: logInData, loading: logInLoading, error: logInError },
  ] = useLogInMutation({
    onCompleted: (data) => {
      if (data?.logIn?.token) {
        setViewer(data.logIn);
        sessionStorage.setItem("token", data.logIn.token);
        displaySuccessNotification("You've successfully logged in!");
      }
    },
  });

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    if (code) {
      logIn({
        variables: {
          input: { code },
        },
      });
    }
  }, [logIn]);

  useEffect(() => {
    if (authData?.authUrl) {
      window.location.href = authData.authUrl;
    }
  }, [authData]);

  useEffect(() => {
    if (authError) {
      displayErrorMessage(
        "Sorry! We weren't able to log you in. Please try again later"
      );
    }
  });

  const logInErrorBannerElement = useMemo(
    () =>
      logInError ? (
        <ErrorBanner description="Sorry! We weren't able to log you in. Please try again later" />
      ) : null,
    [logInError]
  );

  if (logInLoading) {
    return (
      <LogInSection>
        <Spin size="large" tip="Logging you in..." />;
      </LogInSection>
    );
  }

  if (logInData?.logIn) {
    const { id: viewerId } = logInData.logIn;
    return <Redirect to={`/user/${viewerId}`} />;
  }

  return (
    <LogInSection>
      {logInErrorBannerElement}
      <Container>
        <Intro>
          <IntroTitle level={3}>
            <span role="img" aria-label="wave">
              👋
            </span>
          </IntroTitle>
          <IntroTitle level={3}>Log in to TinyHouse!</IntroTitle>
          <IntroText>
            Sign in with Google to start booking available rentals!
          </IntroText>
        </Intro>
        <GoogleButton onClick={() => getAuthUrl()}>
          <GoogleButtonLogo src={googleLogo} alt="Google Logo" />
          <GoogleButtonText>Sign in with Google</GoogleButtonText>
        </GoogleButton>
        <Note type="secondary">
          Note: By signing in, you&apos;ll be redirected to the Google consent
          form to sign in with your Google account.
        </Note>
      </Container>
    </LogInSection>
  );
};

export default Login;
