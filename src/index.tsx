import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/index.css";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { Affix } from "antd";
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
import { AppHeader } from "./regions";
import { Viewer } from "./lib/graphql/generated";

const httpLink = createHttpLink({
  uri: "/api",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const initialViewer: Viewer = {
  id: null,
  token: null,
  avatar: null,
  hasWallet: null,
  didRequest: false,
};

const App = () => {
  const [viewer, setViewer] = useState<Viewer>(initialViewer);

  return (
    <Router>
      <Affix offsetTop={0}>
        <AppHeader viewer={viewer} />
      </Affix>
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
    </Router>
  );
};
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
