const deviceService = require('../services/device_service.js');

module.exports = function (app) {
    app.get("/", function (req, res) {
        let devices = deviceService.getAllDevices();

        console.log("Retrieving all devices: ", devices);

        res.render("index.html", {devices})
    });
}