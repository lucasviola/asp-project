const db = require('../db.js');

const findAllDevices = async () => {
    return db.selectDevices()
        .then(result => result)
        .catch(err => err);
}

module.exports = {findAllDevices};