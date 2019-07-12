const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const favicon = require('serve-favicon')
const logger = require('morgan')


require('dotenv').config();
require('./config/database');


const app = express()

app.use(cors());
app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico'))) // to serve favicon icon

app.use(express.static(path.join(__dirname, 'build'))) // to serve static files

app.use('/api/users', require('./routes/api/users'));
app.use('/api/beers', require('./routes/api/beers'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
}); //this will match every singe rout and send the single html file

const port = process.env.PORT || 3001;

app.listen(port, ()=>{
        console.log(`we are connected on port: ${port}`)
})