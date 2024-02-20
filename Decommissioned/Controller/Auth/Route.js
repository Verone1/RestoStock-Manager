// imports the express framework
const express = require("express"); // express is used here to define routes
// creates express router object and assigns it to variable "router"
const router = express.Router();
/*
imports class "authentication" and modules inside it
extracts functions and assigns them to const variable with the same name
 */
const { registration , login, updateUserRole, deleteSelectedUser} = require("./Authentication");

// define new route for registration and creates route instance while setting base path to registration
router.route("/registration").post(registration);
// define new route for login and creates route instance while setting base path to login
router.route("/login").post(login); // post handles incoming HTTP requests from client
// define new route for "updateuserrole" and creates route instance while setting base path to updateuserrole
router.route("/updateUserRole").put(updateUserRole);// put updates data already on server
// define new route for "deleteSelectedUser" and create route instance while setting up base path for "deleteSelectedUser"
router.route("/deleteSelectedUser").delete(deleteSelectedUser);

// exports entire class so it can be used in other classes
module.exports = router
