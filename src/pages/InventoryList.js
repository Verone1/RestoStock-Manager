const connectDatabase = require("./Database")

const express = require("express");

const application = express();
const PORT = 5000;

// creates a route so that we can retrieve information on the stock
// MOVE THIS LATER TO ROUTE CLASS
    application.get('/stock', async (req, res) =>
{
    try
    {
        const stockQuery= 'SELECT stock_name, quantity_sold, quantity_left FROM stock_table';
        const queryResult = await client.query(stockQuery);

        res.status(200).json(queryResult);
    }
    catch(error) {
        console.error('Error occurred when pulling stock data');
        res.status(500).json(
            {
                message: "Pulling stock data is unsuccessful",
                error: error.message
            });
    }
});


// activating the server
// CHANGE LATER THROUGH SERVER CLASS

application.listen(PORT, () =>
{
    console.log(`The server is running on port ${PORT}`)
});
