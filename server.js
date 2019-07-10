const express = require('express')
const path = require('path')
var cookieParser = require('cookie-parser');
var session = require('express-session');
const favicon = require('serve-favicon')
const logger = require('morgan')
var passport = require('passport');

require('dotenv').config();
require('./config/database');
require('./config/passport');

const app = express()


app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser());
app.use(session({
    secret: 'sourDays',
    resave: false,
    saveUninitialized: true
}));
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico'))) // to serve favicon icon
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'build'))) // to serve static files

const port = process.env.PORT || 3001;

app.listen(port, ()=>{
        console.log(`we are connected on port: ${port}`)
})