const express = required("express") // imports the express framework
const application = express() // creates express instance
const PORT = 3000 // var for port
const connectDatabase = require("./Database") // assigns database connection instance to var
connectDatabase(); // calls method that attempts connect to database
application.use(express.json())
application.use("/api/auth", require("./Authentication/Route")) // server receives request to api/auth will trigger route handler in authen/route

/*
Starts HTTP server, lists for requests on PORT
 */
const server = application.listen(PORT, function()
{
    console.log('Server connected to port ' + PORT);
});

// handles rejection of promise
// terminates the server
process.on("unhandledRejection", (err) =>
{
    console.error(`Unhandled Rejection Error: ${err.message}`);
    server.close(() =>
    {
        console.log("Unhandled Rejection error occurred, server has been terminated");
        process.exitCode = 1;
    });
});


