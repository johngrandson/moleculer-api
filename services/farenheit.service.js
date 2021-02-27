const { Service } = require("moleculer");

module.exports = function (broker) {
  return new Service(broker, {
    name: "fahrenheit",
    actions: {
      convert(req) {
        return (req.params.temp * 9) / 5 + 32 + " °F";
      },
    },
  });
};
