const deviceService = require('../services/device_service.js');

module.exports = (app) => {
    app.get("/device", async (req, res) => {
        console.log("Retrieving all devices: ");

        return deviceService.getAllDevices()
            .then(devices => {
                console.log("Succesfully retrieved all devices: ", devices)
                res.status(202).send({deviceList: devices})
            })
            .catch(err => {
                console.log("An error occurred: ", err)
                res.status(500).send({error:"error"})
            });
    });
}