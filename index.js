const { getToken } = require('./auth');
const { sendOtp } = require('./sender');

module.exports = {
  getToken,
  sendOtp,
};