import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  email: {
    type: String, 
    required: true 
  },
  password: {
    type: String, 
    required: true
  },
  createdEvents: [ 
    {
      type: Schema.Types.ObjectId, 
      ref: 'Event'
    } 
  ]
});

const User = mongoose.model('User', userSchema);


export default User;