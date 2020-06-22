const express = require('express');
const db = require('../database/index.js');

const PORT = 3000;
const app = express();
app.use(express.json());
app.use('/', express.static('../client/dist'));

app.get('/api/stores', (req, res) => {
  db.Store.find().exec((err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.status(200).json({ stores: results });
    }
  });
});

app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));
