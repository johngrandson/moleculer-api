const { Service } = require("moleculer");

module.exports = function (broker) {
  return new Service(broker, {
    name: "temp",
    actions: {
      convert: {
        params: { temp: { type: "string" } },
        async handler(req) {
          const temp = Number(req.params.temp);

          const fahrenheit = await req.call("fahrenheit.convert", {
            temp,
          });

          const kelvin = await req.call("kelvin.convert", {
            temp,
          });

          return { celsius: `${temp} °C `, fahrenheit, kelvin };
        },
      },
    },
  });
};
