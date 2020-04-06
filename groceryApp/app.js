const express =  require('express');
const router = require('./router');
const connect = require('./db');

//connect to the database
connect();

//Create the server
const app = express();

//Configure the views
app.set('view engine', 'ejs');
app.set('views', './views');


//Ignore icon requests
app.get('/favicon.ico', function(request, response) {
  response.status(204).end();

});

//loig requests to the console
app.use(function(request, response, next){
  console.log('------------------', new Date().toLocaleTimeString());
  console.log(request.method, request.url);
  console.log('Body =', request.body);
  next();
});

//Redirect from the homepage
app.get('/', function(request, response){
  response.redirect('/lists')
});

//route content requests
app.use('/', router);

//handle undefined routes
app.use(function(request, response){
  console.log('Responded with 404');
  response.status(404).end();
});

//handle other errors
app.use(function(error, request, response){
  console.error(error.stack);
  response.status(500).send(error.message);
});

//Start the server
app.listen(3000);
console.log('Server is ready.')
