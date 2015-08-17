/**
 * Node.JS Web App Starter
 * Include: MethodOverride, HTTP, Static Server, EJS HTML Renderer
 * Created by Andriy Ermolenko on 17.08.15.
 */

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var render = require('ejs').renderFile;

var routes = require('./routes/index');
var conf = require('./api/conf');

var app = express();

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

app.listen(conf.get('port') || 3000);


