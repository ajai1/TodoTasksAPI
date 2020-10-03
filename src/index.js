const express = require("express");
require("./db/mongoose");

const app = express();
app.use(express.json());
//Router SetUp
app.use("/", require("./routes/api/todos.js"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
