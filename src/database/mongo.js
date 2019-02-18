const mongoose = require('mongoose');

const URI = 'mongodb://localhost/react-practice';

module.exports = mongoose.connect(URI, { useNewUrlParser: true })
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));


// connections on port 27017