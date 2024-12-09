const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users_db',
});



router.get('/', (req, res) => {
  db.query('SELECT * FROM Sneaker', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des produits', err);
      res.status(500).send('Erreur serveur');
      return;
    }
    res.json(results);
  });
});


