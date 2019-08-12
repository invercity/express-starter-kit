/**
 * Node.JS Web App Starter
 *
 * Created by Andrii Yermolenko on 17.08.15.
 */

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const favicon = require('serve-favicon');
const render = require('ejs').renderFile;

const routes = require('./routes');

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(favicon(path.join(__dirname, '../public/favicon.ico')));
app.use(express.static(path.join(__dirname, '../public')));
app.engine('html', render);
app.set('view engine', 'html');

app.get('/', routes.index);

module.exports = app;
