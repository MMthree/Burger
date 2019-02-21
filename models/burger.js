var orm = require("../config/orm.js");

var burg = {
    all: function(cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // New burger
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    //Update
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    // Delete burger
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burg;