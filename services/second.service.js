const { Service } = require("moleculer");

module.exports = function (broker) {
  return new Service(broker, {
    name: "second",
    actions: {
      test(req) {
        return "Test running...";
      },
    },
  });
};
