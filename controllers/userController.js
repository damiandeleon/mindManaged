const db = require("../models");

module.exports = {
    findById: function(req, res) {
      console.log(req.params.id)
        db.User
        .findOne({user_id: req.params.id})
        .then(userData => res.json(userData))
        .catch(err => res.status(422).json(err));
    },
    findAll: function(req, res) {
      db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User
        .create(req.body)
        .then(userData => {
          console.log('userData: ', userData)
          res.json(userData)
        })
        .catch(() => console.log("User already exists!"));
    }
}