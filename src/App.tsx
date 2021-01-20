import React, { useEffect, useMemo, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useLogInMutation, Viewer } from "lib/graphql/generated";
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

const initialViewer: Viewer = {
  id: null,
  token: null,
  avatar: null,
  hasWallet: null,
  didRequest: false,
};

const spinnerStyle = { alignSelf: "center" };

const App = (): JSX.Element => {
  const [viewer, setViewer] = useState<Viewer>(initialViewer);
  const [logIn, { error }] = useLogInMutation({
    onCompleted: (data) => {
      if (data?.logIn) {
        setViewer(data.logIn);
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
      <MainLayout viewer={viewer}>
        <Spin size="large" tip="Launching TinyHouse app" style={spinnerStyle} />
      </MainLayout>
    );
  }

  return (
    <MainLayout viewer={viewer}>
      {logInErrorBannerElement}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          render={() => <Login setViewer={setViewer} />}
        />
        <Route
          exact
          path="/logout"
          render={() => <LogOut setViewer={setViewer} />}
        />
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
