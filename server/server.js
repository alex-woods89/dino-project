const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

app.use(cors());
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('apposaurus');
    const dinoFavCollection = db.collection('fav_dinos');
    app.use('/api/fav_dinos', createRouter(dinoFavCollection));
  })
  .catch(console.error);

app.use('/api/dinosaurs/:name', (req, res) => {
  console.log("in dino route");
  const name = req.params.name;
  const url = `http://dinosaurpictures.org/api/dinosaur/${name}`;
  fetch(url)
    .then(jsonData => jsonData.json())
    .then(data => res.json(data));
});

app.use('/api/dinosaurs', (req, res) => {
  console.log("in / route");
  const url = 'http://dinosaurpictures.org/api/category/europe';
  fetch(url)
    .then(jsonData => jsonData.json())
    .then(data => res.json(data));
});

app.listen(3000, function() {
  console.log(`Dino server running on port ${this.address().port}`);
});
