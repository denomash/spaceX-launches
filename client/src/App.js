import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";
import Launches from './components/Launches';

import logo from './logo.png';
import './bootstrap.min.css';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="container">
      <img src={logo} alt='spaceX' style={{ width: 300, display: 'block', margin: 'auto'}}/>
      <Launches />
    </div>

    </ApolloProvider>
  );
}

export default App;
