import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider,
} from "react-apollo";
import App from "./App";
import "./index.css";

const networkInterface = createNetworkInterface({
  uri: "https://www.react-europe.org/gql",
});

const client = new ApolloClient({
  networkInterface: networkInterface,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root"),
);
