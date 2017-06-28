console.log("Let's get some data!")
const models = require("./models/");


const user = models.User.build({
  name: // enter name,
  email: // enter email,
  bio: // enter bio
});

user.save()


models.User.findAll()
  .then( function(users) {

    for (var i = 0; i < users.length; i++) {
      console.log("We found " + users[i].name )
    }

    models.sequelize.close()

  })
