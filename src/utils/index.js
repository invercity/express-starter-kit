const log4js = require('log4js');
const config = require('config');

const appList = [];

function getLogger(moduleName) {
  appList.push(moduleName);
  const logger = log4js.getLogger(moduleName);
  log4js.configure(config.get('log4js.config'));
  // pattern: '-yyyy-MM-dd'
  logger.level = config.get('log4js.logLevel');
  return logger;
}

module.exports = {
  getLogger
};
