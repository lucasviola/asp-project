const bionicReaderService = require('../services/main');

module.exports = function (app) {
    app.get("/healthcheck", function (req, res) {

        console.log("App UP");

        res.send({'status':'up'});
    });

    app.post("/bionic-reader/convert", function (req, res) {
        const text = req.body.text;

        console.log("Text to be converted: ", text);

        const textWithBionicReading = bionicReaderService.convertText(text);

        console.log("Text with Bionic Reading: ", textWithBionicReading);

        res.send({text: textWithBionicReading});
    });
}