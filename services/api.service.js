const ApiGateway = require("moleculer-web");

module.exports = {
  name: "api-gateway",
  mixins: [ApiGateway],
  settings: {
    port: process.env.PORT || 3001,
    routes: [
      {
        path: "/api",
        aliases: {
          "GET /temp/:temp": "temp.convert",
        },
      },
    ],
    cors: true,
    bodyParsers: {
      json: { strict: true },
      urlencoded: { extended: false },
    },
  },
};
