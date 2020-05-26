const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();
const configRoutes = require('./routes');

const static = express.static(__dirname + "views");

app.use(express.static("asset"));
app.use("views", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

configRoutes(app);


app.listen(1000, () => {
  console.log("server is running!");
  console.log("Routes will be running on http://localhost:1000");
});
