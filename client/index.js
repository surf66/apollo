import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import TrackList from './track-list';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3000/graphql' }),
  cache: new InMemoryCache(),
});

let targetElement = document.getElementById('track-list');
render(
  <ApolloProvider client={client}>
    <TrackList />
  </ApolloProvider>,
  targetElement
);