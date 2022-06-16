const mysql = require("mysql2/promise");


let connect = async () => {

    console.log("Connecting to mySQL!");

    if(global.connection && global.connection.state !== 'disconnected'){
        return global.connection;
    }

    const connection = await mysql.createConnection("mysql://$user@localhost:3306/mySmartHome");

    console.log("Connected succesfully");

    global.connection = connection;
    return connection;
}

const selectDevices = async () => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM device;');
    return rows;
}

const selectDeviceById = async (deviceId) => {
    const conn = await connect();
    return conn.query('SELECT * FROM device WHERE id = ?;', deviceId)
        .then(row => {
            const [result] = row;
            return result;
        })
        .catch(err => err);
}

const insertDevice = async (device) => {
    const conn = await connect();

    //TODO: Refactor, this should be extracted to another function and validated inside the service,
    // the object device should already get in with the needed attributes
    const [deviceType] = await conn.query('SELECT id, control_information FROM device_type WHERE type_name = ?', device.deviceType);

    const deviceId = deviceType[0].id;
    const defaultControlInformation = deviceType[0].control_information;

    const [rows] = await conn.execute('insert into device (device_name, device_type, display_picture, control_information) values (?, ?, ?, ?);',
        [device.deviceName, deviceId, device.displayPicture, defaultControlInformation]);

    console.log("result:", rows);
    return selectDeviceById(rows.insertId);
}

const updateDevice = async (modifiedDevice, deviceId) => {
    const conn = await connect();

    //TODO: Refactor, this should be extracted to another function and validated inside the service,
    // the object device should already get in with the needed attributes
    const [deviceType] = await conn.query('SELECT id FROM device_type WHERE type_name = ?', modifiedDevice.deviceType);
    const deviceTypeId = deviceType[0].id;

    await conn.execute('UPDATE device SET device_name = ?, device_type = ?, display_picture = ?, control_information = ? WHERE id = ?;',
        [modifiedDevice.deviceName, deviceTypeId, modifiedDevice.displayPicture,
            modifiedDevice.controlInformation, deviceId]);

    const updatedDevice =  await selectDeviceById(deviceId);
    return updatedDevice
}

const deleteDevice = async (deviceId) => {
    const conn = await connect();
    return await conn.query('DELETE FROM device WHERE id = ?;', deviceId)
        .then(rows => [rows])
        .catch(err => err)
}

module.exports = {selectDevices, selectDeviceById, insertDevice, updateDevice, deleteDevice}