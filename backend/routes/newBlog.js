const router = require('express').Router();
const NewBlog = require('../models/newBlog.models.js');




router.route('/').get((req, res) => {
    NewBlog.find()
    .then(NewBlog => res.json(NewBlog))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/addNewBlog').post((req, res) => {
    const title = req.body.title;
    
    const writerName = req.body.writerName;
    const paragraph = req.body.paragraph;
    const tags = req.body.tags;
    const catagories = req.body.catagories;
    const createdAt = req.body.createdAt;
    const updatedAt = req.body.updatedAt;
    

    const newBlog = new NewBlog({title,writerName,paragraph,tags,catagories,createdAt,updatedAt});

    newBlog.save()
    .then(() => res.json('New Blog added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;