const axios = require("axios");

const callApiAndConvert = async (text) => {
    const encodedParams = new URLSearchParams();

    encodedParams.append("content", text);
    encodedParams.append("response_type", "page");
    encodedParams.append("request_type", "html");
    encodedParams.append("fixation", "1");
    encodedParams.append("saccade", "10");

    const options = {
        method: 'POST',
        url: 'https://bionic-reading1.p.rapidapi.com/convert',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'redacted',
            'X-RapidAPI-Host': 'bionic-reading1.p.rapidapi.com'
        },
        data: encodedParams
    };

    return axios.request(options)
        .then(function (response) {
            console.log(response.data);
            return response.data;
        }).catch(function (error) {
            console.error(error);
            return error;
    });
}

module.exports = {callApiAndConvert}