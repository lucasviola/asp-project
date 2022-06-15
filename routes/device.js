const deviceService = require('../services/device.js');

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
                res.status(500).send({error:err})
            });
    });
    app.get("/device/:id", async (req, res) => {
        const deviceId = req.param('id');

        console.log("Retrieving device with id: ", deviceId);

        return deviceService.getDeviceById(deviceId)
            .then(device => {
                console.log("Succesfully retrieved device with id: ", deviceId)
                res.status(202).send({deviceList: device})
            })
            .catch(err => {
                console.log("An error occurred: ", err)
                res.status(500).send({error:err})
            });
    });
}