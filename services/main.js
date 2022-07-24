const bionicApiClient = require('../client/main.js');

const convertText = async (text) => {
    return bionicApiClient.callApiAndConvert(text)
        .then(textWithBionic => {
            console.log("Converted text:")

            return textWithBionic;
        })
        .catch(err => console.error("An error happened when converting the text. Error:", err));
}

module.exports = {convertText};
