import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import client from "./graphql/client";
import GlobalStyles from "./styles/GlobalStyles";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
