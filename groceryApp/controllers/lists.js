//modules that defines a request handlers for our list collection

/*
module.exports.index = function(request, response) {
  response.send('GET /lists');
};

module.exports.retrieve = function(request, response) {
  response.send(`GET /lists/${request.params.customerName}`);
};
*/

const List = require('../models/list');

// GET /courses
module.exports.index = function(request, response, next) {
  List.distinct('_id')
    .then(listIDs => response.redirect(`/lists/${listIDs[0]}`))
    .catch(error => next(error));
};

// GET /courses/:id
module.exports.retrieve = function(request, response, next) {
  const queries = [
    List.findById(request.params.customerName),
    List.distinct('customerName')
  ];

  Promise.all(queries).then(function([list, listIDs]) {
    if (list) {
      response.render('lists/index', {list: list, listIDs: listIDs});
    } else {
      next(); // No such course
    }
  }).catch(error => next(error));
};
