# BaleOTP


**BaleOTP** یک کتابخانه برای ارسال otp با زبان javascript است


### نصب

```bash
npm i bale-otp
```
### استفاده

```js
const { getToken, sendOTP } = require("bale-otp");

async function main() {
    const token = await getToken("client_id", "client_secret");
    console.log(await sendOTP(token, "989123456789", "otp"));
}
main()
```