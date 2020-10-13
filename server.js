var express = require('express'),
  app = express(),
  port = process.env.PORT||3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/blogModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/articledb'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(function (req, res, next) {
  // Sito web che si desidera connettersi
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Richiedere i metodi che si desidera consentire
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Richiedere le intestazioni che si desidera consentire
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  if (req.method === "OPTIONS") {
    return res.status(200).end();
}

  // Passare al livello successivo di middleware
  next();
});
var routes = require('./api/routers/blogRouters'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

