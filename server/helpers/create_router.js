const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {
    const router = express.Router();

    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err});
        });
    });

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .findOne({_id: ObjectId(id)})
        .then((doc) => res.json(doc))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err});
        });
    });

    router.post('/', (req, res) => {
        const newData = req.body;
        collection
        .insertOne(newData)
        .then((result) => {
            res.json(result.ops[0])
        })
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err});
        });
    });

    // router.get('/dinosaur/:name', (req, res) => {
    //   const name = req.params.name;
    //   // const url = 'http://dinosaurpictures.org/api/dinosaur/Kol';
    //   const url = `http://dinosaurpictures.org/api/dinosaur/${name}`;
    //   fetch(url)
    //     .then(jsonData => jsonData.json())
    //     // .then(data => res.json(data));
    //     .then(data => console.log(data));
    // });

    return router;
};


module.exports = createRouter;
