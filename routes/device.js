const deviceService = require('../services/device.js');
const Device = require('../routes/device_request.js');

module.exports = (app) => {
    app.get("/device", async (req, res) => {
        console.log("Retrieving all devices: ");

        return deviceService.getAllDevices()
            .then(devices => {
                console.log("Succesfully retrieved all devices: ", devices)
                res.status(200).send({deviceList: devices})
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
                res.status(200).send({deviceList: device})
            })
            .catch(err => {
                console.log("An error occurred: ", err)
                res.status(500).send({error:err})
            });
    });
    app.post("/device/", async (req, res) => {
        const {deviceName, deviceType, displayPicture} = req.body;
        const device = new Device(deviceName, deviceType, displayPicture);

        console.log("Inserting new device. Device type: ", device.deviceType);

        return deviceService.insertDevice(device)
            .then(device => {
                console.log("Succesfully added new device: ", device.deviceType)
                res.status(201).send({deviceList: device})
            })
            .catch(err => {
                console.log("An error occurred: ", err)
                res.status(500).send({error:err})
            });
    });

    app.patch("/device/:id", async (req, res) => {
        const {deviceName, deviceType, displayPicture, controlInformation} = req.body;

        const device = new Device(deviceName, deviceType, displayPicture, controlInformation);
        const deviceId = req.param('id')

        console.log("Updating device information. Device Id: ", deviceId);

        return deviceService.updateDevice(device, deviceId)
            .then(device => {
                console.log("Succesfully updated device: ", device)
                res.status(200).send({deviceList: device})
            })
            .catch(err => {
                console.log("An error occurred: ", err)
                res.status(500).send({error:err})
            });
    });

    app.delete("/device/:id", async (req, res) => {
        const deviceId = req.param('id');

        console.log("Deleting device with id: ", deviceId);

        return deviceService.deleteDevice(deviceId)
            .then(device => {
                console.log("Succesfully deleted device with id: ", deviceId)
                res.status(200).send();
            })
            .catch(err => {
                console.log("An error occurred: ", err)
                res.status(500).send({error:err})
            });
    });
}