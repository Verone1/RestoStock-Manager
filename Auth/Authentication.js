const connectDatabase = require("./Database")
const {connect} = require("mongoose");

// REGISTRATION MODULE
exports.registration = async (req, res, next) =>
{
    // takes data (json file) and destructing assignment by looking for the respective names in json file
    const { username, userPassword } = req.body;

    // makes sure the password is greater then 8
    if(userpassword.length < 8)
    {
        return res.status(400).json({message: "User password must be minimum 8 characters long"});
    }

    try
    {
        // query assigned to variable
        const mySQLQuery = "INSERT INTO users (username, userPassword) VALUES (?, ?)";
        // using query variable, query database, will potentially insert user+pass, if error return it to error
        connectDatabase.query(mySQLQuery, [username, userPassword], (error, results) =>
        {
            // if error, will return internal server error
            if(error)
            {
                console.error("Error has occured creating user: " + error.message);
                return res.status(500).json({
                    message: "User creation unsuccessful",
                    error: error.message
                });
            }

            // success means data is inserted to the the database
            const userID = results.insertId;
            res.status(200).json({
                message: "User has been created with success",
                user: {
                    id: userID,
                    username: username,
                    userPassword: userPassword
                }
            });
        });
    }
    // catches errors while executing function
    catch (err)
    {
            console.error("Error occurred while making user: " + err.message);
            res.status(500).json(
            {
                message: "User creation is unsuccessful",
                error: err.message
            });
    }
};





// LOGIN MODULE
exports.login = async (req, res, next) =>
{
    // takes data (json file) and destructing assignment by looking for the respective names in json file
    const {username, userPassword} = req.body;
    // makes sure a username and password have been entered
    if(!username || !userPassword)
    {
        return res.status(400).json({
            success: false,
            message: "Either username or userPassword not present",
        });
    }

    try {
        // using SQL checks user table for user name and password and assigns to var
        // assigns query to a variable
        const mySQLQuery2 = 'SELECT * FROM user WHERE username = ? AND userPassword = ?';
        // using query variable connects to user table and checks user table for corresponding username and password
        const databaseResult = await connectDatabase.query(mySQLQuery2, [username, userPassword]);


        // checks if query resulted nothing, user not found
        if (!databaseResult.length) {
            return res.status(401).json(
                {
                    success: false,
                    error: "Unable to find user"
                });
        }
        // user data found in database, success
        else
        {
            const myUser = databaseResult[0];
            return res.status(200).json({
                success: true,
                message: "Login has been Successful",
                user: myUser,
            });
        }
    }
    // catches any error that could have occured
    catch (error)
        {
            console.error(error);
            return res.status(500).json(
                {
                    success: false,
                    message: "Occurrence of an error"
                });
        }

};











// UPDATE USER ROLE

exports.updateUserRole = async (req, res, next) =>
{
    // takes json file, deconstructs to variables matching the corresponding variables
    const {userRole, userID} = req.body;

    // checks to see if role and user are provided
    if(!userRole || !userID)
    {
        return res.status(400).json(
            {
                message: "UserRole and UserID are needed"
            });
    }

    try
    {
        // query assigned to var
        const getIDQuery = 'SELECT * FROM users WHERE id = ?'
        // use var and query the database and assign that to var
        const queryData = await connectDatabase(getIDQuery, [id]);

        // checks if query data received data otherwise user is not found
        if(!queryData.length)
        {
            return res.status(404).json(
                {
                    message: "Unable to find the user",
                });
        }

        // assigns user data to var
        const foundUser = queryData[0];
        // checks to see if user already a admin
        if(foundUser.role === "admin")
        {
            return res.status(400).json(
                {
                message: "This user already has a admin role ",
                 });
        }
        else {
            // assigns query to var
            const updateUserRoleQuery = 'UPDATE users SET role = ? WHERE id = ?';
            // query database into changing requested users privilage from normal to admin
            await connectDatabase.query(updateUserRoleQuery, ["admin", id]);

            // returns when admin has been successfuly changed
            return res.status(201).json(
                {
                    messsage: "User role updated successfully",
                    user:
                        {
                            id: foundUser.id,
                            username: foundUser.username,
                            role: "admin",
                        },
                });
        }
    }
    // catches any errors that might occurred
    catch (error)
    {
        console.error("Error originating in database", error);
        return res.status(500).json({
            message: "Internal error orginating server side"
        })
    }
}






// DELETE USER

exports.deleteSelectedUser = async (req, res, next) =>
{
    const {id} = req.body;

    try
    {
        // finding user query assigned to variable
        const holdQuery = 'SELECT * FROM users WHERE id = $1';
        const {lookForUser} = await pool.query(query, [id]);

        if(!lookForUser.length)
        {
                return res.status(404).json(
                {
                    message: "Unable to find user"
                });
        }
        else
        {
            // deleting user query assigned to variable
            const deleteUserQuery = 'DELETE FROM user WHERE id = $1';

                res.status(200).json(
                {
                    message: "User has been deleted successfully",
                    user: lookForUser[0],
                });
        }
    }
    catch (error)
    {
        console.error("Error in Database: ", error);
        res.status(500).json({
            message: "Internal error on server side has occurred"
        })
    }
}
