const axios = require('axios');

async function sendOTP(access_token, phone, otp) {
    try {
        return await axios.post("https://safir.bale.ai/api/v2/send_otp", JSON.stringify({
            phone: phone,
            otp: otp
        }), {
            headers: {
                "Authorization": `Bearer ${access_token}`
            }
        }
        ).then(res => res.data.balance).catch(err => console.log(err));
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = { sendOTP };