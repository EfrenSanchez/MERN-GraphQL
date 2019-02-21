//Dependencies
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Models
const User = require('../../models/user');

//Resolvers
module.exports = {
  // Create an user
  createUser: async args => {
    try {
      const existingUser = await User.findOne({ email: args.userInput.email });
      if (existingUser) {
        throw new Error('User exists already.');
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
      //new user object
      const user = new User({
        email: args.userInput.email,
        password: hashedPassword
      });

      const result = await user.save();
      return { 
        ...result._doc,
        password: null,
        _id: result.id
      };

    } catch (err) {
      throw err;
    }
  },
  
  login: async ({ email, password }) => {
    const user = await User.findOne({ email: email });
    if(!user) {
      throw new Error ('User does not exists!');
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if(!isEqual) {
      throw new Error ('Password is incorrect!');
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email},
      process.env.SECRET,
      { expiresIn: '1h' }
    );
    return { 
      userId: user.id,
      token: token,
      tokenExpiration: 1
    };
  }
};