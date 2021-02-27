const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker();

broker.createService({
  name: "math",
  actions: {
    add(req) {
      return Number(req.params.num1) + Number(req.params.num2);
    },
  },
});

broker
  .start()
  .then(() => broker.call("math.add", { num1: 2, num2: 4 }))
  .then((res) => console.log(res));
