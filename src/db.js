const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bcrypt = require('bcrypt');
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

app.get('/api/ams', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM am');
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/approval', async (req, res) => {
  try {
    const result = await pool.query("SELECT order_no, site_name, request_date, current_item_quantity, requested_item_quantity, reason_for_request, item_name, item_cost, item_description FROM approvals WHERE status = 'Pending'");
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// || Area Manager Reports

app.get('/api/amreport1', async (req, res) => {
  try {
    const result = await pool.query("SELECT order_no, site_name, request_date, current_item_quantity, requested_item_quantity, reason_for_request, item_name FROM approvals");
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/amreport2', async (req, res) => {
  try {
    const result = await pool.query("SELECT order_no, site_name, request_date, current_item_quantity, requested_item_quantity, reason_for_request, item_name FROM approvals");
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/amreport3', async (req, res) => {
  try {
    const result = await pool.query("SELECT order_no, site_name, request_date, current_item_quantity, requested_item_quantity, reason_for_request, item_name FROM approvals");
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// || Head Office Reports

app.get('/api/horeport1', async (req, res) => {
  try {
    const result = await pool.query("SELECT order_no, site_name, request_date, current_item_quantity, requested_item_quantity, reason_for_request, item_name FROM approvals");
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/horeport2', async (req, res) => {
  try {
    const result = await pool.query("SELECT order_no, site_name, request_date, current_item_quantity, requested_item_quantity, reason_for_request, item_name FROM approvals");
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/horeport3', async (req, res) => {
  try {
    const result = await pool.query("SELECT order_no, site_name, request_date, current_item_quantity, requested_item_quantity, reason_for_request, item_name FROM approvals");
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/restaurants', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM restaurant');
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/api/status', async (req, res) => {
  const { order_no, status } = req.body;
  try {
    await pool.query('UPDATE approvals SET status = $1 WHERE order_no = $2', [status, order_no]);
  } catch (error) {
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

app.post('/api/restaurant', async (req, res) => {
  const { name, phoneNumber, address, ams } = req.body;
  try {
    await pool.query(
      'INSERT INTO restaurant (name, phone_number, address, area_manager) VALUES ($1, $2, $3, $4)',
      [name, phoneNumber, address, ams]
    );
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// For inventory page 
app.get('/api/inventory/:storeID', async (req, res) => {
  const storeID = req.params.storeID;

  try {
    const result = await poool.query("SELECT id, product_name, items_left, price_point FROM inventory WHERE store_id = $1", [branch]);

    const invenInfo = result.rows;

    res.json(invenInfo);
  }
  catch (error) {
    console.error("Error has occurred retrieving inventory info")
    res.status(500).json({ error: "Internal server error" });
  }

});

// check sql querry 
// For SPENDING which was previously BUDGET

// the GET route is defined here for my API which is DB 
// The endpoint for this is api/spending and this will then listen for it 
app.get('api/spending', async (req, res) => {
  // the paramaster called areaMager, month, year is then extracted from this so that they can be used for the querying in to the database
  const { areaManager, month, year } = req.query;

  try {

    const result = await pool.query('SELECT * FROM spending_table WHERE area_manager = $1 AND month = $2 AND year =$3', [areaManager, year, month]);

    // contains the result from the query 
    res.status(200).json(result.rows);
  }
  catch (error) {
    console.error("Error occurred executing query", error);
    res.status(500).json({ error: "Internal Server Error Occurred" })
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const userCheck = await pool.query('SELECT * FROM login WHERE username = $1', [username]);

    if (userCheck.rows.length > 0) {
      const user = userCheck.rows[0];

      if (password === user.password) {
        res.json({ success: true, message: 'Sucessful' });
      } else {
        res.status(401).json({ success: false, message: 'Password does not match' });
      }
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error('Error', error);
    res.status(500).json({ error: 'server error' });
  }
});
