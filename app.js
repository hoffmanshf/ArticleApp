const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

mongoose.connect('mongodb://localhost/articleapp');
let db = mongoose.connection;


app.get('/', function (req, res) {
  let articles = [
    {
      id:1,
      title:'Article One',
      author:"Author One",
      body:"test body1"
    },
    {
      id:2,
      title:'Article Two',
      author:"Author Two",
      body:"test body2"
    },
    {
      id:3,
      title:'Article Three',
      author:"Author Three",
      body:"test body3"
    }
  ];
  res.render('index', {
    title:'Articles',
    articles:articles
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
