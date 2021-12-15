const { gql } = require("apollo-server");

typeDefs = gql`
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
module.exports = typeDefs;
