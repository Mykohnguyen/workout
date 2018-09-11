const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const server= app.listen(9999);
const path = require('path');
app.set('trust proxy', 1)
const session = require('express-session');

app.use(session({
    secret: 'peanutbutter',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
app.set('views', __dirname + '/views');
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json()); 
mongoose.Promise = global.Promise;
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)
app.all("*", (req,res,next) => {
res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
