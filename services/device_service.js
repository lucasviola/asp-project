const db = require('../db.js');

const getAllDevices = async () => {
    return db.selectDevices()
        .then(r => {
            console.log("Device found on database:", r)
            return r;
        })
        .catch(err => console.error("An error happened when retrievin devices. Error: ", err));
}

module.exports = {getAllDevices};
