// the is the http endpoints router.
// It links different endpoints/uri requests to different functions below or within Controller. 
// These functions read/write database by accessing functions in Model


// Demo


const app = require("express");
const PORT = 3000; // Define the port

// Start the server
app.listen(PORT, function() {
    console.log('Server connected to port ' + PORT);
});

// Router setup
const router = app.Router();
router.route("/registration").post(registration);
router.route("/login").post(login);
router.route("/order").post(order); // Create a new order

// Apply the router to the app
app.use("/", router);



//----------------------------------------------------------------

const registration = (req, res) => {
    //.........
};



const login = (req, res) => {
    // verifyLogin is a function in MODEL layer
    let result = verifyLogin(req.body.emp_id, req.body.password);

    if (result) {
        // Login succeeded, make and return the view
        res.send("Login successful.");
    } else {
        // Login failed, return the error view with HTTP status code 400 (Bad Request)
        res.status(400).send("Login failed.");
    }
};


const createOrder = (req, res) => {
    let result = createOrder(req.order);
    if (result) {
        // order creation succeeded, make and return the view
        res.send("order creation successful.");
    } else {
        // order creation failed, return the error view with HTTP status code 400 (Bad Request)
        res.status(400).send("order creation failed.");
    }
};


