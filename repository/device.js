const db = require('../db.js');

const findAllDevices = async () => {
    return db.selectDevices()
        .then(result => result)
        .catch(err => err);
}

const findById = async (deviceId) => {
    return db.selectDeviceById(deviceId)
        .then(result => result)
        .catch(err => err);
}

const insertDevice = async (device) => {
    return db.insertDevice(device)
        .then(result => result)
        .catch(err => err);
}

const updateDevice = async (modifiedDevice, deviceId) => {
    return db.updateDevice(modifiedDevice, deviceId)
        .then(result => result)
        .catch(err => err);
}

module.exports = {findAllDevices, findById, insertDevice, updateDevice};