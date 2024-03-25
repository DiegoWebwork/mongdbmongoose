const moongose = require('mongoose');

const UserSchema = new moongose.Schema ({
  name: String,
  email: { type: String, unique: true},
  password: String,
});

module.exports = moongose.model('User', UserSchema);