const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
const ensureLoggedIn = require('./config/ensureLoggedIn')

require('dotenv').config()
//connecting to the DB
require('./config/database');

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/checkToken'));

//Routes
app.use('/api/users', require('./routes/api/users'))

//Catch All is necessary to return the index.html on all non-AJAX requests
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})