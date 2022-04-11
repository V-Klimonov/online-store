import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { GlobalStyle } from "./components/styled/GlobalStyle";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Provider store={store}>
        <>
          <GlobalStyle />
          <App />
        </>
      </Provider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
