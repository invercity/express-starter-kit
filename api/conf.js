/**
 * Created by Andriy Ermolenko on 17.08.15.
 */

const nconf = require('nconf');

nconf.argv().env().file({file: './config.json' });

module.exports = nconf;