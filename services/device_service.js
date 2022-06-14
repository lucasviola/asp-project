const getAllDevices = () => {
    let devices = {
        "deviceList": [
            {
                "deviceName": "my lampada",
                "type": "SMART_LOCKER",
                "displayPicture": "image.jpg",
                "controlInformation": {
                    "status": "on",
                    "password": "not_secure",
                }
            }
        ]

    };
    return devices
}

module.exports = {getAllDevices};
