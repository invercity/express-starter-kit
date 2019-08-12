const config = require('config');

const app = require('./src/app');
const port = config.get('app.port');

app.listen(port, () => {
  console.log(`Express started on port ${port}`);
});
