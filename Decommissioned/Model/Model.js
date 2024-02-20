// this is the layer of business logic & accessing database , the functions below will be called only by funcs in Controller
// demo

const db = require('./db');

const createOrder = (order) => {
    let insert = "INSERT INTO Orders VALUES (?, ?, ...)";   // Replace with your actual SQL insert statement and columns
    let values = [order.column1, order.column2, ...];       // Replace with values from the 'order' object

    db.query(insert, values, (error, results) => {
        if (error) {
            console.error('Insertion failed', error);
            return false;
        } else {
            console.log('Insertion succeeded', results);
            return true;
        }
    });
};


const updateOrder = (order) => {
    // ................
}

const verifyLogin = (emp_id, password) => {
    
    result = SQL.execute("SELECT password FROM employees WHERE emp_id = ?", emp_id");
    
    if(result.equals("password) return true;

    return false;
}