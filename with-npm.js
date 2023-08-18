const SoapClient = require('payamak-panel/lib/soap');
const RestClient = require('payamak-panel/lib/rest');

const soapClient = new SoapClient('username', 'password');

soapClient.GetCredit().then(res => console.log(res));
