const deviceService = require('../services/device.js');
const db = require('../db.js');


module.exports = function (app) {
    app.get("/", function (req, res) {
        console.log("Retrieving all devices: ", devices);

        res.render("index.html", {devices})
    });
}