const { createLogger, transports, format } = require('winston');
const path = require('path');

const logDirectory = './logs/';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: path.join(logDirectory, 'api_test.log') })
  ],
});

module.exports = logger;