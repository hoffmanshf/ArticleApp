var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

mongoose.connect('mongodb://localhost/articleapp');
var db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', function(err){
  console.log(err);
});

Article = require('./models/article');

// Home Route
app.get('/', function(req, res){
  Article.find({}, function(err, articles){
    if(err){
      console.log(err);
    } else {
      res.render('index', {
        title:'Articles',
        articles: articles
      });
    }
  });
});

app.get('/articles/add', function(req, res){
  res.render('add_article', {
    title:'Add Article'
  });
});

app.listen(3000, function () {
  console.log('Running on port 3000');
});
