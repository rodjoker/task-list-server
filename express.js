const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
const valid = require("./routers/validUser")
const route = require("./routers/list-view-router.js");
const edit = require("./routers/list-edit-router.js");

app.use("/", valid);
app.use("/", route);
app.use("/", edit);



app.listen(3000, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});