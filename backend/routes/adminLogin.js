const router = require('express').Router();
const AdminLogin = require('../models/adminLogin.models.js');

router.route('/').get((req, res) => {
    AdminLogin.find()
    .then(AdminLogin => res.json(AdminLogin))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    AdminLogin.findOne({username: username, password: password})
    .then(() => {
       res.send("Admin Login Successful!");
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;