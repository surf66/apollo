const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const tracks = [
  {
    title: 'She thick',
    artist: 'Yo Momma',
  },
  {
    title: 'Scouse Land',
    artist: 'DC and the Bandits',
  },
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { tracks: [Track] }
  type Track { title: String, artist: String }
`;

// The resolvers
const resolvers = {
  Query: { tracks: () => tracks },
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});