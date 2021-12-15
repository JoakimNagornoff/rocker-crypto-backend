const { ApolloServer, gql } = require("apollo-server");
const apiKEY = "B15D99A1-5C2D-46C8-9C88-D2D502168874";
const axios = require("axios");

//typedefs
const typeDefs = gql`
  type Query {
    getCryptos: [Crypto]
    getCrypto(name: String): [Crypto]
  }
  type Crypto {
    asset_id: String
    name: String
    type_is_crypto: String
    price_usd: String
  }
`;

//resolvers
const resolvers = {
  Query: {
    getCryptos: () => {
      //filters everything that is not crypto
      try {
        const response = axios
          .get(`http://rest.coinapi.io/v1/assets?apikey=${apiKEY}`)
          .then((res) => res.data.filter((p) => p.type_is_crypto === 1));
        return response;
      } catch (error) {
        console.error(error);
      }
    },
    getCrypto(parent, args) {
      //adds argument for name in get request
      try {
        const response = axios
          .get(`http://rest.coinapi.io/v1/assets/${args.name}?apikey=${apiKEY}`)
          .then((res) => res.data);
        return response;
      } catch (error) {
        console.error(error);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
