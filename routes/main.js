
module.exports = function (app) {
    app.get("/", function (req, res) {

        console.log("Bionic Reading");

        res.send('OK');
    });

}