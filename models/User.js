const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')


const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  password: String,
  name: String, 
  current_city: String,
  users_wineries: {
    type: Schema.Types.ObjectId,
    ref: 'Winery'
  }
});

// On Save Hook, encrypt password

userSchema.pre('save', function (next) {
  const user = this;
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });

  });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
}


module.exports = mongoose.model('User', userSchema);