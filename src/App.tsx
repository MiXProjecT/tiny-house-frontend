import React, { useEffect, useMemo, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { useLogInMutation } from "lib/graphql/generated";
import { MainLayout } from "layouts/MainLayout";
import "./styles/index.css";
import { Spin } from "antd";
import {
  Home,
  Host,
  Listing,
  Listings,
  NotFound,
  User,
  Login,
  LogOut,
} from "./sections";
import { ErrorBanner } from "./components";
import { ViewerContext } from "./contexts/ViewerContext";

const spinnerStyle = { alignSelf: "center" };

const App = (): JSX.Element => {
  const { viewer, setViewer } = useContext(ViewerContext);
  const [logIn, { error }] = useLogInMutation({
    onCompleted: (data) => {
      if (data?.logIn) {
        setViewer(data.logIn);

        if (data.logIn.token) {
          sessionStorage.setItem("token", data.logIn.token);
        } else {
          sessionStorage.removeItem("token");
        }
      }
    },
  });

  useEffect(() => {
    logIn();
  }, [logIn]);

  const logInErrorBannerElement = useMemo(
    () =>
      error ? (
        <ErrorBanner description="We weren't able to verify if you were logged in. Please try again later!" />
      ) : null,
    [error]
  );
  if (!viewer.didRequest && !error) {
    return (
      <MainLayout>
        <Spin size="large" tip="Launching TinyHouse app" style={spinnerStyle} />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {logInErrorBannerElement}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={LogOut} />
        <Route exact path="/host" component={Host} />
        <Route exact path="/listing/:id" component={Listing} />
        <Route exact path="/listings/:location?" component={Listings} />
        <Route exact path="/user/:id" component={User} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
};

export default App;
