// this is the layer of Business Logic ( accessing database ), the functions below will be called only by funcs in Controller



// demo of creating an Order

func createOrder(Order order){
    return SQL.execute("insert into Order where .....);
}

func updateOrder(Order order){
    return SQL.execute("update Order where .....);
}

func verifyLogin(int emp_id, string password){
    
    result = SQL.execute("SELECT password FROM employees WHERE emp_id = ?", emp_id");
    
    if(result.equals("password) return true;

    return false;
}