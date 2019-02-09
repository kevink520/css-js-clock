'use strict';

var express     = require('express');
var helmet      = require('helmet');

var app = express();
app.use(helmet());

app.use('/css', express.static(process.cwd() + '/css'));
app.use('/js', express.static(process.cwd() + '/js'));

//Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
  });
    
//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

//Start our server and tests!
app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port " + (process.env.PORT || 3000));
});

