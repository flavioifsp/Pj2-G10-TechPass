const axios = require("axios");

module.exports = async (req, res, next) => {
  try {
    if (!req.body.lat || !req.body.lng) {
      const {
        data: {
          results: {
            0: {
              locations: {
                0: { latLng },
              },
            },
          },
        },
      } = await axios.get(
        `https://www.mapquestapi.com/geocoding/v1/address?key=${
          process.env.KEY_MAPQUEST
        }&location=${req.body.cep.replace("-", "")}`
      );

      console.log(req.body.cep, latLng);

      req.body = {
        ...req.body,
        ...latLng,
      };
    }
  } catch (error) {
    console.error(error);
  }

  next();
};
