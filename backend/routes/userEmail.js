const router = require('express').Router();
const UserEmail = require('../models/userEmail.models.js');

router.route('/').get((req, res) => {
    UserEmail.find()
    .then(UserEmail => res.json(UserEmail))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    
    const newUser = new UserEmail({name,email});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

