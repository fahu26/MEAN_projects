const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({urlencoded: false}));

app.use((req, res, next) =>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTION");
  next();
})

app.post('/api/posts', (req, res, next) =>{
  const post = req.body;
  console.log(post);
  res.json({
    message : "Post created successfully"
  })
})

app.use('/api/posts', (req, res, next)=>{
  const post = [{
    'id':1,
    'title': 'A love storry',
    'content': 'It is about childhood love'
  },
  {
    'id':2,
    'title': 'A Comedy storry',
    'content': 'It is about charlie chaplin biopic'
  }];

  res.status(200).json({
    message : 'Post fetched successsfully',
    posts : post
  })
})

// app.use((req, res, next) =>{
//   console.log("In first middleware");
//   next();
// })

// app.use((req, res, next) =>{
//   res.end("In My second response");
// })

module.exports = app;
