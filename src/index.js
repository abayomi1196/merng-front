import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";

import App from "./App";
import client from "./graphql/client";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
