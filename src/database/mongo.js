const mongoose = require('mongoose');

const URI = process.env.DB;

module.exports = mongoose.connect(URI, { useNewUrlParser: true })
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));


// connections on port 27017