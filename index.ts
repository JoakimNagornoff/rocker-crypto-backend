const { ApolloServer } = require("apollo-server");

var resolvers = require("./src/resolvers.ts");
var typeDefs = require("./src/typeDefs.ts");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
