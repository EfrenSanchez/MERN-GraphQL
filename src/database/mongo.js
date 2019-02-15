import mongoose from 'mongoose';

const URI = 'mongodb://localhost/react-practice';

mongoose.connect(URI, { useNewUrlParser: true })
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));

export default mongoose;

// connections on port 27017