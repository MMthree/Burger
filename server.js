var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


//ROUTES
//------------------------------
var routes = require("./controllers/burgers_controller.js")
app.use("/", routes);

//CSS and Images
app.use(express.static("assets"));

//Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})

