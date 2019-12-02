import React from 'react';

import EntryListPageContainer from './containers/EntryListPageContainer'

import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
  })

// This file is mostly for setting context for the graphql server

const App = () => (
  <ApolloProvider client={client}>
    <EntryListPageContainer />
  </ApolloProvider>
)

export default App;
