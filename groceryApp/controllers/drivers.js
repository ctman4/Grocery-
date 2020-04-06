//module that defines a request handler for our driver collection

/*
module.exports.index = function(request, response) {
  response.send('GET /drivers');
};
*/

const Driver = require('../models/driver');

// GET /drivers?sort=
module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'course'; // Default to sort by course

  Driver.find().sort(order)
    .then(drivers => response.render('drivers/index', {drivers: drivers, order: order}))
    .catch(error => next(error));
};
