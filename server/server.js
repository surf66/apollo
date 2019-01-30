const express = require('express');
const path = require('path');
var cors = require('cors')

const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const tracks = [
  {
    title: 'Every Day',
    artist: 'Eric Prydz',
  },
  {
    title: 'Opus',
    artist: 'Eric Prydz',
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

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// The GraphQL endpoint
app.use('/graphql', cors(), bodyParser.json(), graphqlExpress((req) => {
  return {
    schema,
    context: {
      user: req.user
    }
  };
}));

app.use(express.static(path.join(__dirname, '/public/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});