import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import { Listings } from "./sections";

const httpLink = createHttpLink({
  uri: "/api",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Listings title="title" />
  </ApolloProvider>,
  document.getElementById("root")
);
