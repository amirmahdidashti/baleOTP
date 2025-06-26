import axios from "axios";

async function sendOTP(access_token, phone, otp) {
    try {
        const res = await axios.post('https://safir.bale.ai/api/v2/send_otp', {
            phone: phone,
            otp: otp
        }, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            }
        }
        );
        return res.data.balance;
    } catch (err) {
        throw new Error('خطا در گرفتن توکن: ' + err.message);
    }
}

module.exports = { sendOTP };