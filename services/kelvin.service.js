module.exports = {
  name: "kelvin",
  actions: {
    convert(req) {
      return req.params.temp + 273.15 + " K";
    },
  },
};
