
const convertText = async (text) => {

    const convertedText = text;

    return convertedText
        .then(translatedText => {
            console.log("Translated text:", translatedText)

            return translatedText;
        })
        .catch(err => console.error("An error happened when translating the text. Error:", err));
}

module.exports = {convertText};
