const { spec, request, settings } = require('pactum');
const baseUrl = 'https://reqres.in';

request.setBaseUrl(baseUrl);
request.setDefaultTimeout(5000);
settings.setLogLevel('ERROR');
settings.setSnapshotDirectoryPath('new/path');

module.exports = { spec };