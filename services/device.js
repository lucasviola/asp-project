const deviceRepository = require('../repository/device');

const getAllDevices = async () => {
    return deviceRepository.findAllDevices()
        .then(deviceList => {
            console.log("Device found on database:", deviceList)
            return deviceList;
        })
        .catch(err => console.error("An error happened when retrieving devices. Error: ", err));
}

const getDeviceById = async (deviceId) => {
    return deviceRepository.findById(deviceId)
        .then(device => {
            console.log("Device found on database:", device)
            return device;
        })
        .catch(err => console.error("An error happened when retrieving devices. Error: ", err));
}

const insertDevice = async (device) => {
    return deviceRepository.insertDevice(device)
        .then(device => {
            console.log("Device saved on database:", device)
            return device;
        })
        .catch(err => console.error("An error happened when saving an new device. Error: ", err));
}


module.exports = {getAllDevices, getDeviceById, insertDevice};
