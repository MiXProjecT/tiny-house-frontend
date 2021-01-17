import React from "react";
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

const Login = (): JSX.Element => {
  return (
    <LogInSection>
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
        <GoogleButton>
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
