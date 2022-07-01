import React, { useState } from "react";
import "../src/CSS/Login.css"
import {useHistory, withRouter} from "react-router-dom"

function Login({setIsLoggedIn, loginData, setLoginData}) {
    const history = useHistory()
    

    
    function handleSubmit(e) {
        
        e.preventDefault()
        setIsLoggedIn(true)
        history.push("/home")
        console.log("loggedin")
    }

    function handleChange(e) {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }
    

    return (
        <form onSubmit={handleSubmit}
        
        >
            <div className="welcome">
                <h1>Welcome to Quacker</h1>
                <img src="/Quacker large.png" />
            </div>
            <div className="inputs">
                <input
                className="login-input"
                type="text"
                name="username"
                placeholder= "username"
                value={loginData.username}
                onChange={handleChange}
                />
                <input 
                className="login-input"
                type="text"
                name="password"
                placeholder="password"
                value={loginData.password}
                onChange={handleChange}
                />
                <div></div>
                <button onClick={handleSubmit} className="login-button" type="submit">Login</button>
             </div>
        </form>
    )
}
export default Login