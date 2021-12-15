import { apiKEY } from "./env";
const axios = require("axios");

export const resolvers = {
  Query: {
    //filter out only return object that is type crypto
    getCryptos: async () => {
      try {
        const response = await axios
          .get(`http://rest.coinapi.io/v1/assets?apikey=${apiKEY}`)
          .then((res: any) =>
            res.data.filter((p: any) => p.type_is_crypto === 1)
          );

        return response;
      } catch (error) {
        console.error(error);
      }
    },
    //adds argument for name prop in url
    getCrypto(parent: any, args: any) {
      try {
        const response = axios
          .get(`http://rest.coinapi.io/v1/assets/${args.name}?apikey=${apiKEY}`)
          .then((res: any) => res.data);
        return response;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
