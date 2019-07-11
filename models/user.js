const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const beersSchema = new Schema({
  nameOfPlace: String,
  location: String,
  beerName: String,
  rating: {
    type: Number,
    enum: [1,2,3,4,5,6,7,8,9,10],
    default: 1
  }
})


const userSchema = new Schema({
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String,
    beers: [beersSchema]
  }, {
    timestamps: true
  });

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    // replace the user provided password with the hash
    user.password = hash;
    next();
  });
});

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

userSchema.methods.comparePassword = function(tryPassword, cb){
  bcrypt.compare(tryPassword, this.password, cb)
}

module.exports = mongoose.model('User', userSchema);