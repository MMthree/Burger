var express = require("express");
var router = express.Router();
var burg = require("../models/burger.js");

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get("/burgers", function (req, res) {
    burg.all(function(data) {
        var obj = {burgers: data}
        console.log(data);
        res.render("index", obj);
    });
});

// New burger
router.post("/api/burgers", function (req, res) {
    console.log(req.body.burger_name)
    burg.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

// Set burger to devoured
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burg.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Delete burger
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burg.deleteOne(condition, function(result) {
        // if (result.changedRows === 0) {
        //     // If no rows were changed, then the ID must not exist, so 404.
        //     return res.status(404).end();
        // } else {
        //     res.status(200).end();
        // }
    });
});


module.exports = router;
