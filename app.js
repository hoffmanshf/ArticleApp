const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  let articles = [
    {
      id:1,
      title:'Article One',
      author:"B Adam1",
      body:"test body1"
    },
    {
      id:2,
      title:'Article Two',
      author:"B Adam2",
      body:"test body2"
    },
    {
      id:3,
      title:'Article Three',
      author:"B Adam3",
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
