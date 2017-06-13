/**
 * Node.JS Web App Starter
 * Include: MethodOverride, HTTP, Static Server, EJS HTML Renderer
 *
 * Created by Andriy Ermolenko on 17.08.15.
 */

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const render = require('ejs').renderFile;

const routes = require('./routes/index');
const conf = require('./api/conf');

const app = express();

app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', render);
app.set('view engine', 'html');

app.get('/', routes.index);

const port = conf.get('port') || 3000;

app.listen(port, () => {
  console.log(`Server started successfully on port: ${port}`);
});
