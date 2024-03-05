// imports post grade and assigns it to variable
const {postGradeInstance} = require('pg');

/*
Establishes connection to the database
We enter our databases detail user, password etc to conenct
 */
const databaseConnection = new postGradeInstance(
    {
        host: 'penguin.kent.ac.uk',
        user: 'sw714',
        userPassword: 'oub0ind',
        database: 'sw714'
});

/*
Attempts connection to database
* Check whether database connection has been successful
* */
const connectDatabase = () =>
{
    databaseConnection.connect((err) =>
    {
        // if there's a problem connect send back error
        if(err)
        {
            console.error('Error has occured while attempting to connect to MySQL database: ' + err.stack);
            return;
        }
        // connection successful then send connection established
        console.log('Connection has been established with MySQL database' + databaseConnection.threadId);
    });
};

// allows connectDB() function be available in other classes
module.exports = connectDatabase;

// use to specifically connect to DB on other JS code pages
// const databaseConnected = require('./db');
// connectedDB
