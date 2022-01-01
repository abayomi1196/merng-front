import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import client from "./graphql/client";
import GlobalStyles from "./styles/GlobalStyles";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
