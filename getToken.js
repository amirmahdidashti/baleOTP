const axios = require('axios');

async function getToken(clientId, clientSecret) {
    try {
        return await axios.post("https://safir.bale.ai/api/v2/auth/token", {
            grant_type: "client_credentials ",
            client_secret: clientSecret,
            scope: "read",
            client_id: clientId
        }, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(res => res.data.access_token).catch(err => console.log(err));
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = { getToken };