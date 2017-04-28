import React from "react";
import ReactDOM from "react-dom";
import cxs from "cxs/monolithic";
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider,
} from "react-apollo";
import App from "./App";

cxs("body", {
  margin: 0,
  padding: 0,
  fontFamily: "'Roboto Condensed', sans-serif",
  backgroundColor: "#3B5BA8",
  color: "#ffffff",
});

cxs("html, body, #root", {
  height: "100%",
});

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: "https://www.react-europe.org/gql",
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root"),
);
