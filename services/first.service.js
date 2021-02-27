const { Service } = require("moleculer");

module.exports = function (broker) {
  return new Service(broker, {
    name: "first",
    actions: {
      say(req) {
        return console.log("Hello from say action");
      },
    },
  });
};
