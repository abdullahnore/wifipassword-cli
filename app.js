const wifipassword = require("wifi-password");
wifipassword().then((Password) => {
  console.log(Password);
});
