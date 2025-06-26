import axios from "axios";

async function getToken(clientId, clientSecret) {
    try {
        const res = await axios.post('https://safir.bale.ai/api/v2/auth/token', {
            grant_type: "client_credentials ",
            client_secret: clientSecret,
            scope: "read",
            client_id: clientId
        });
        return res.data.access_token;
    } catch (err) {
        throw new Error('خطا در گرفتن توکن: ' + err.message);
    }
}

module.exports = { getToken };