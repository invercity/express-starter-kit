/**
 * Node.JS Web App Starter
 *
 * Created by Andrii Yermolenko on 17.08.15.
 */

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const session = require('express-session');
const config = require('config');
const ejs = require('ejs');

const routes = require('./routes');

const sessionStore = new session.MemoryStore();
const render = ejs.renderFile;
const app = express();

app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.urlencoded({
  limit: config.get('app.maxRequestSize'),
  extended: true
}));
app.use(bodyParser.json({
  limit: config.get('app.maxRequestSize')
}));
app.use(methodOverride());
app.use(session({
  secret: config.get('app.secret'),
  resave: true,
  saveUninitialized: true,
  cookie: {
    expires: false,
    secure: true
  },
  store: sessionStore
}));
app.use(cookieParser(config.get('app.secret')));
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../public')));
app.engine('html', render);
app.set('view engine', 'html');

app.get('/', (req, res) => res.render('index'));
app.use('/api', routes);

module.exports = app;
