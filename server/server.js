const express = require('express');
const path = require('path');
const morgan = require('morgan');
const db = require('../database/index.js');

const PORT = 4507;
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/stores', (req, res) => {
  const { randomStore } = req.query;
  // console.log(req.query);
  // for all in database: db.Store.find().exec((err, results) => {
  // db.Store.aggregate([{$sample:{size:1}}]).exec((err, results) => {
  db.Store.find( {store_id: randomStore} ).exec((err, results) => {
    if (err) {
      res.status(500);
    } else {
      // console.log(results[0]);
      const randomProduct = Math.floor(Math.random() * results[0].store_products.length);
      console.log(results[0]);
      res.status(200).json({ stores: results[0], product: results[0].store_products[randomProduct] });
    }
  });
});

// app.get('/api/stores/:id', async (req, res) => {
//   try {
//     var store = await db.Store.findById(req.params.id).exec();
//     res.send(store);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// app.get('/', (req, res) => res.send("test"));

app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));
