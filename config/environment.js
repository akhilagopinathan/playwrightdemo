const dotenv = require('dotenv');
const path = require('path');

const env = process.env.TEST_ENV || 'test';

dotenv.config({
  path: path.resolve(
    __dirname,
    `${env}.env`
  )
});

module.exports = {
  baseUrl: process.env.BASE_URL,
  username: process.env.SAUCE_USERNAME,
  password: process.env.SAUCE_PASSWORD
};
