console.log("Let's get some data!")
const models = require("./models/");


const user = models.User.build({
  name: 'Susan',
  email: 'susan@susan.com',
  bio: 'im a susan and you are not'
});

user.save().then(function() {
  models.User.findAll()
    .then( function(users) {

      for (var i = 0; i < users.length; i++) {
        console.log("We found " + users[i].name )
      }

      models.sequelize.close()

    })
})
