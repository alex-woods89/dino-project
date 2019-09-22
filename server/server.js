const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

app.use(cors());
app.use(bodyParser.json());
app.use('/', (req, res) => {
  const url = 'http://dinosaurpictures.org/api/category/all';
  fetch(url)
    .then(jsonData => jsonData.json())
    .then(data => res.json(data));
});

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('dino_favorites');
    const dinoFavCollection = db.collection('favs');
    app.use('/api/favs', createRouter(dinoFavCollection));
  })
  .catch(console.error);

app.listen(3000, function() {
  console.log(`Dino server running on port ${this.address().port}`);
});
