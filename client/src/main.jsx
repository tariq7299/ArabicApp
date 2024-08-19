// I have imported this at the top of the file before App.jsx so in order to make the styles at any of the <component.scss> files apply !, like by making main.scss come first, this will make any style in any upcoming scss file apply and overrdies the styles in main.scss
import "../src/scss/main.scss";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
