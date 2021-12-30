import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import client from "./graphql/client";
import GlobalStyles from "./styles/GlobalStyles";
import { LoggedInContextProvider } from "./context/LoggedInContext";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <LoggedInContextProvider>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </LoggedInContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
