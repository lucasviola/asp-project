const bionicReaderService = require('../services/main');

module.exports = function (app) {
    app.get("/healthcheck", function (req, res) {

        console.log("App UP");

        res.send({'status':'up'});
    });

    app.get("/bionic-reader/convert", function (req, res) {
        const text = req.params['text'];

        console.log("Text to be converted: ", text);

        bionicReaderService.convertText(text)
            .then(textWithBionicReading => {
                console.log("Text with Bionic Reading: ", textWithBionicReading);
                res.send(textWithBionicReading);
            })
            .catch(error => {
                console.log('Error: ', error);

                res.render(error);
            });
    });
}