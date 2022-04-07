const router = require('express').Router();
const UserSignUp = require('../models/userSignUp.models.js');

router.route('/').get((req, res) => {
    UserSignUp.find()
    .then(UserSignUp => res.json(UserSignUp))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addUserSignUp').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const imageUrl = req.body.imageUrl;

    
    
    const newUserSignUp = new UserSignUp({name,imageUrl,email});

    newUserSignUp.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;