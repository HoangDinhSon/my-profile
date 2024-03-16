const app = require("./src/app");
const  config= require("./src/config/config.mongodb")

const PORT = config.app.port || 3056

const server = app.listen(PORT, () => {
  console.log(`WSV ecommerce start with ${PORT}`)
})

process.on("SIGINT", () => {
  server.close(() => console.log(`exit Server EXpress `));
})