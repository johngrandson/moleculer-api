const { ServiceBroker } = require("moleculer");
const path = require("path");

(async () => {
  const broker = new ServiceBroker();

  broker.loadService(path.join(__dirname, "./hello.service.js"));
  await broker.start();
  await broker.call("hello.say");
})();
