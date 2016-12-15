var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

// var newUser = new User({
//     email: 'nedelecgregoire@hotmail.com'
// });
//
// newUser.save().then((res) => {
//   console.log(`email saved successfully: ${JSON.stringify(res, undefined, 2)}`);
// }, (err)=>{
//   console.log('Unable to save email', err);
// });

module.exports = {User};
