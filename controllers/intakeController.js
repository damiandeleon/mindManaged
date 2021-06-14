const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Intake
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByUserId: function (req, res) {
        db.Intake
            .find({ user_id: req.params.user_id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Intake
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}