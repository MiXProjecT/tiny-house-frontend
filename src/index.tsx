import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./styles/index.css";
import App from "./App";
import { ViewerProvider } from "./contexts/ViewerContext";

const httpLink = createHttpLink({
  uri: "/api",
});

const authLink = setContext(() => {
  const token = sessionStorage.getItem("token");
  return {
    headers: {
      "X-CSRF-TOKEN": token || "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ReactDOM.render(
  <ApolloProvider client={client}>
    <ViewerProvider>
      <Router>
        <App />
      </Router>
    </ViewerProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
