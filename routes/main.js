const deviceController = require('../services/device.js');

module.exports = function (app) {
    app.get("/", function (req, res) {

        const devicesPromise = deviceController.getAllDevices();
        console.log("Retrieving all devices");

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

    app.get("/device/new", function (req, res) {
        console.log("Loading add device page");

        res.render("add-device.html");
    });
    app.get("/device/add/", function (req, res) {
        console.log("Adding new device.");

        const deviceName = req.query.deviceName;
        const deviceType = req.query.deviceType;

        console.log("Device name: ", deviceName);
        console.log("Device type: ", deviceType)

        const device = {
            'deviceName': deviceName,
            'deviceType': deviceType,
            'displayPicture': 'https://static.thenounproject.com/png/340318-200.png'
        }

        deviceController.insertDevice(device)
            .then(() => {
                console.log("Device registered succesfully!");

                deviceController.getAllDevices()
                    .then((devices) => res.render("index.html", {devices}));
            });
    });
}