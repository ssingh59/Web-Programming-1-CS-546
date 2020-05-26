const express = require("express");
const app = express();
const static = express.static(__dirname + '/public');
const configRoutes = require("./routes");
const exphbs = require('express-handlebars');

const handlebarsInstance = exphbs.create({defaultLayout: 'main'});

app.use("/public", static);
app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');

configRoutes(app);
app.listen(3000, () => {
    console.log("Your routes will be running on http://localhost:3000");
});
