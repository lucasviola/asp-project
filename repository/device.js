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

module.exports = {findAllDevices, findById};