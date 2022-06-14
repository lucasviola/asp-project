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

let selectDevices = async () => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM device;');
    return rows;
}

module.exports = {selectDevices}