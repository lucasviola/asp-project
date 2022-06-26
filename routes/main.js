const deviceController = require('../services/device.js');

module.exports = function (app) {
    app.get("/", function (req, res) {

        const devicesPromise = deviceController.getAllDevices();
        console.log("Retrieving all devices: ", devicesPromise);

        devicesPromise.then((devices) => res.render("index.html", {devices}));
    });

    app.get("/about", function (req, res) {
        console.log("Loading about page: ");

        res.render("about.html");
    });

    app.get("/configure/:id", function (req, res) {
        const id = req.params['id'];
        console.log("Retrieving information for device id: ", id);

        const devicePromise = deviceController.getDeviceById(id);

        devicePromise.then((device) => res.render("configure.html", {device}));
    });

    app.get("/delete/:id", function (req, res) {
        const id = req.params['id'];
        console.log("Deleting device with id: ", id);

        deviceController.deleteDevice(id)
            .then(() => {
                console.log("Device deleted succesfully");

                deviceController.getAllDevices()
                    .then((devices) => res.render("index.html", {devices}));
            });
    });
}