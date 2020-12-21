import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ApolloClient, ApolloProvider } from "@apollo/react-hooks";
import client from "./apollo";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

