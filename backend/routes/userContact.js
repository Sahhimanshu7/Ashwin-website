const router = require('express').Router();
const UserContact = require('../models/userContact.models.js');

router.route('/').get((req, res) => {
    UserContact.find()
    .then(UserContact => res.json(UserContact))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    const message = req.body.message;
    
    const newContact = new UserContact({name,email,number,message});

    newContact.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;