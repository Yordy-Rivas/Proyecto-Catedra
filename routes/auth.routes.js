const express = require('express');

const router = express.Router();

const connection = require('../config/db');

router.post('/login', (req, res) => {

  const { email, password } = req.body;

  const sql = `
    SELECT *
    FROM usuarios
    WHERE email = ?
    AND password = ?
  `;

  connection.query(
    sql,
    [email, password],
    (error, results) => {

      if (error) {
        return res.status(500).json(error);
      }

      if (results.length === 0) {

        return res.status(401).json({
          success: false,
        });

      }

      const user = results[0];

      res.json({
        success: true,

        user: {
          id: user.id,
          name: user.nombre,
          email: user.email,
          role: user.rol,
        },
      });

    }
  );

});

module.exports = router;