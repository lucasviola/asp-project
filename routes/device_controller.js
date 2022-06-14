const deviceService = require('../services/device_service.js');

module.exports = (app) => {
    app.get("/device", (req, res) => {

        const devices = deviceService.getAllDevices();

        console.log("Retrieving all devices: ", devices);

        res.status(202).send({devices})
    });
}