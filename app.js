/**
* Module dependencies.
*/
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , main = require('./routes/main')
  , http = require('http')
  , path = require('path');
//var methodOverride = require('method-override');
var session = require('express-session');
var app = express();
var mysql      = require('mysql');
var bodyParser=require("body-parser");

// conecta com o banco de dados, precisa cria o mesmo e as tabelas.
var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : 'root',
              database : 'automacaodb'
            });
 
connection.connect();
global.db = connection;
 
// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
              secret: 'keyboard cat',
              resave: false,
              saveUninitialized: true,
              cookie: { maxAge: 60000 }
            }))
 
// development only
app.get('/', routes.index);//call for main index page
app.get('/signup', user.signup);//call for signup page
app.post('/signup', user.signup);//call for signup post 
app.get('/login', routes.index);//call for login page
app.post('/login', user.login);//call for login post
app.get('/home/dashboard', main.dashboard);//call for dashboard page after login
app.get('/home/logout', user.logout);//call for logout
app.get('/home/profile', user.profile);//to render users profile
app.get('/home/filtropordia', main.dia);//to render users profile
app.get('/home/filtropormes', main.mes);//to render users profile
app.get('/home/filtroporsemana', main.semana);//to render users profile
app.get('/home/completo', main.tudo);//to render users profile
//Middleware
app.listen(8082)
