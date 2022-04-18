// import express
const express = require('express');
// import route
const router = require('./route')
const morgan = require('morgan');
// import middleware
const bodyParser = require('body-parser');
const session = require('express-session');
const {v4: uuidv4} = require('uuid');
const errorMiddleware = require('./middlewares/error')
const notFoundMiddleware = require('./middlewares/notfound')


// inisiasi express
const app = express();
// konfigurasi port
const port = 3000;

app.use(morgan('dev'));

// konfigurasi body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// sajikan folder public secara static
app.use(express.static(__dirname + '/public'));

// terapkan folder pembaca body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}));





app.set('view engine', 'ejs');

// terapkan route di aplikasi
app.use(router);

//terapkan middleware error dan not found
app.use(errorMiddleware.error);
app.use(notFoundMiddleware.notFound);



// jalankan server express 
app.listen(port, function() {
  console.log('Server is running on port ' + port)
});
