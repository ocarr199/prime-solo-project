const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
  const query = `SELECT * FROM "user";`
  pool.query(query)
    .then( result => {

      res.send(result.rows);
    })
    .catch(err => {
      console.error("ERROR in post get", err);
      res.sendStatus(500)
    })

})










module.exports = router;
