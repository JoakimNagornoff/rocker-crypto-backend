require("dotenv").config();
const axios = require("axios");

resolvers = {
  Query: {
    getCryptos: () => {
      //filters that has crypto type 1
      try {
        const response = axios
          .get(`http://rest.coinapi.io/v1/assets?apikey=${process.env.apiKEY}`)
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
          .get(
            `http://rest.coinapi.io/v1/assets/${args.name}?apikey=${process.env.apiKEY}`
          )
          .then((res) => res.data);
        return response;
      } catch (error) {
        console.error(error);
      }
    },
  },
};

module.exports = resolvers;
