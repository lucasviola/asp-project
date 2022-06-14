const express = require("express");
const bodyParser= require ("body-parser");
const app = express();
const port = 8084;

app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/main")(app);
require("./routes/device_controller")(app);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.engine("html", require("ejs").renderFile);

app.listen(port, () => console.log(`MySmartHome app listening on port ${port}!`));