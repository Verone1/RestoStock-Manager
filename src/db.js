const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = 3001;

//this code was added in to make it work for the post calls
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/api/restaurants', async (req, res) => {
    try {
      const result = await pool.query('SELECT username FROM users WHERE access_level = $1', ['restaurant']);
      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/api/am', async (req, res) => {
    const { name, phoneNumber, budget, selectedRestaurants } = req.body;
    try {
      await pool.query(
        'INSERT INTO am (name, phone_number, budget, selected_restaurants) VALUES ($1, $2, $3, $4)',
        [name, phoneNumber, budget, selectedRestaurants]
      );
  
      res.status(201).json({ message: 'Record inserted successfully' });
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
