function auth (req, res) {
 if (req.body.email && req.body.password) {
  var email = req.body.email;
  var password = req.body.password;
  var user = {
   email: email,
   password: password
  };
  var query = {
   email: email
  };
  User.findOne(query, function (err, user) {
   if (err) {
    res.send(err);
   } else {
    if (user) {
     if (user.password === password) {
      res.json({
       success: true,
       message: 'Authentication successful!',
       user: user
      });
     } else {
      res.send({
       success: false,
       message: 'Authentication failed! Wrong password.'
      });
     }
    } else {
     res.send({
      success: false,
      message: 'Authentication failed! User not found.'
     });
    }
   }
  });
 }
}

module.exports = auth;