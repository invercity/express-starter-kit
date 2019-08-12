const config = require('config');
const app = require('./src/app');
const { getLogger } = require('./src/utils');

const port = config.get('app.port');
const logger = getLogger('app');

app.listen(port, () => {
  logger.info(`Express started on port ${port}`);
});
