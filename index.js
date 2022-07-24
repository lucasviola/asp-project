const express = require("express");
const bodyParser= require ("body-parser");
const app = express();
const port = 8084;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()) // for parsing application/json

require("./routes/main")(app);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.engine("html", require("ejs").renderFile);

app.listen(port, () => console.log(`Listening on port: ${port}!`));