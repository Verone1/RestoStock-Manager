const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const pool = new Pool({
    user: 'sw714',
    host: 'penguin.kent.ac.uk',
    database: 'sw714',
    password: 'oub0ind',
    port: 5432,
  });


app.get('/api/names', async (req, res) => {
    try {
      const result = await pool.query('SELECT name FROM approval');
      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query', error);
    }
  });

  app.get('/api/restaurants', async (req, res) => {
    try {
      const result = await pool.query('SELECT username FROM users WHERE access_level = $1', ['restaurant']);
      res.json(result.rows);
    } catch (error) {
      console.error( error);
    }
  });

  
  

app.listen(port, () => {
  console.log(`it's working`);
});
