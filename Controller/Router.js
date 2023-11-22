// the is the http endpoints router.
// It links different endpoints/uri requests to different functions below or within Controller. 
// These functions read/write database by accessing functions in Model


// Login Demo

const express = require("express");
const router = express.Router();



router.route("/registration").post(registration);
router.route("/login").post(login);
router.route("/order").post(order);  // Create a new order


func registration = ................

func login = {
    
    Boolean result = verifyLogin(request.emp_id, request.password);

    if (result) {
        // TODO: login succed, make and return the view
        
    }else{
        // TODO: login failed, return the error view with http status code 400 ( request error )
        
    }
}

func createOrder = ...