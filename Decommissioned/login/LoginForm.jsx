import React, { useState } from "react";
import "./LoginForm.css"; 
import axios from "axios";



import userImage from "../Images/person1.png"; 
import userPasswordImage from "../Images/password.png"; 

const LoginForm = () => 
{

    const [username, assignUsername] = useState(""); 
    const [userPassword, assignUserPassword] = useState(""); 

    const processLogin = async () => 
    {
        try
        {
            const retrieveResponse = await axios.post("http://your-backend-api/login",
            {
                    username, 
                    userPassword,
            });

            console.log(retrieveResponse.data); 
        }
        catch (error)
        {
            console.error("Login Process Error has occured", error.message); 
        }
    };




    return(
        <div className = "body">
         <div className = "main-heading">
            <div className = "login-title-text"> Login </div>
            <div className = "title-line"></div>
         </div>

            <div className = "user-inputs-body">

            <div className = "user-input-text">
                <img src = {userImage} alt = ""/>
                <input type = "username" placeholder = "Username" value = {username} onChange = {(e) => assignUsername(e.target.value)}/> 
            </div>

            <div className = "user-input-text">
                <img src = {userPasswordImage} alt = ""/>
                <input type = "user-password" placeholder = "Password" value = {userPassword} onChange = {(e) => assignUserPassword(e.target.value)}/> 
            </div>

            </div>

            <div className = "submit-body">
                <div className = "data-submission" onClick = {processLogin}>Login</div>
            </div>


        </div>
    );
};



export default LoginForm; 
