const router = require('express').Router();
const NewBlog = require('../models/newBlog.models.js');




router.route('/').get((req, res) => {
    NewBlog.find()
    .then(NewBlog => res.json(NewBlog))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search/:searchText').get((req, res) => {
    const searchText = req.params.searchText;
    console.log(searchText);
    const agg = [
        {
            $search: {
              index: 'catagories',
              text: {
                query: `${searchText}`,
                path: {
                  'wildcard': '*'
                }
              }
            },
            
    }
    ];

    const agg2 = [
        {
            $search: {
                index: 'title',
                text: {
                    query: `${searchText}`,
                    path: {
                        'wildcard': '*'
                    }
                }
            }
    }
    ];
    const agg3 = [
        {
            $search: {
                index: 'writerName',
                text: {
                    query: `${searchText}`,
                    path: {
                        'wildcard': '*'
                    }
                }
            }
    }
    ];
NewBlog.aggregate(agg).exec((err, result) => {
    if (err) {
        NewBlog.aggregate(agg2).exec((err, result) => {
            if (err) {
                NewBlog.aggregate(agg3).exec((err, result) => {
                    if (err) {
                        res.status(400).json('Error: ' + err);
                    } else {
                        res.json(result);
                    }
                });
                
            } else {
                res.json(result);
            }
        });
        
    } else {
        res.json(result);
    }
});



});




router.route('/addNewBlog').post((req, res) => {
    const title = req.body.title;
    
    const writerName = req.body.writerName;
    const paragraph = req.body.paragraph;
    const tags = req.body.tags;
    const catagories = req.body.catagories;
    const createdAt = req.body.createdAt;
    const updatedAt = req.body.updatedAt;
    const imageId = req.body.imageId;

    

    const newBlog = new NewBlog({title,writerName,paragraph,tags,catagories,createdAt,updatedAt,imageId});

    newBlog.save()
    .then(() => res.json('New Blog added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;