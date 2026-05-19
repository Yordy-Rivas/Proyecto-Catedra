const express = require('express');
const router = express.Router();

const db = require('../server');

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM articulos';

  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      res.json(results);
    }
  });
});

module.exports = router;