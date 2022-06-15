const deviceRepository = require('../repository/device');

const getAllDevices = async () => {
    return deviceRepository.findAllDevices()
        .then(deviceList => {
            console.log("Device found on database:", deviceList)
            return deviceList;
        })
        .catch(err => console.error("An error happened when retrieving devices. Error: ", err));
}

module.exports = {getAllDevices};
