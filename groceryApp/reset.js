//Creating some data

const mongoose = require('mongoose');
const connect = require('./db');
const List = require('./models/list');
const Driver = require('./models/driver');

//connect to the database
connect();

/*
const List = new mongoose.Schema({
  _id: String,
  customerName: String,
  location: String,
  items: [String],
  phone: String
});
*/



//model a collection of Lists
const lists = [
  new List({
    _id: 'l1',
    customerName: 'Charles Tirrell',
    location: 'Marion, MA',
    items: ['Bananas','Carrots','Beef','Orange Juice','Doritos'],
    phone: '5087286088'
  }),
  new List({
    _id: 'l2',
    customerName: 'Summer Mills',
    location: 'Dartmouth, MA',
    items: ['Bananas','Carrots','Beef','Orange Juice','Doritos'],
    phone: '5085346909'
  }),
  new List({
    _id: 'l3',
    customerName: 'Greg Mason',
    location: 'Boston, MA',
    items: ['Bananas','Carrots','Beef','Orange Juice','Doritos'],
    phone: '5085346909'
  })
];

/*
Drivers
const Driver = new mongoose.schema({
  _id: String,
  driverName: String,
  location: String,
  available: String,
  phone: Number
});
*/

const drivers = [
  new Driver({
    _id: 'd1',
    driverName: 'Matt Jackson',
    location: 'Marion, MA',
    available: 'Yes',
    phone: '5087285505'
  }),

  new Driver({
    _id: 'd2',
    driverName: 'Kyle Bradford',
    location: 'New Bedford, MA',
    available: 'Yes',
    phone: '5087288888'
  }),

  new Driver({
    _id: 'd3',
    driverName: 'Joe Jansen',
    location: 'Wareham, MA',
    available: 'No',
    phone: '5087568585'
  })
];

// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all(drivers.map(driver => driver.save())))
  .then(() => Promise.all(lists.map(list => list.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
