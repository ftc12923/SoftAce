import React from 'react'; 
import './LoginPage.css'; 

function LoginPage() {
    return (
        <div className="loginpage">
            <div className="loginpage__loginpagetitle">
                <h1 className="loginpagetitle"><center>Login</center></h1>
            </div>
            <div className="loginpage__actualusernameinput">
                <input className="actualusernameinput" placeholder="Username"/>
            </div>
            <div className="loginpage__actualuserpasswordinput">
                <input className="actualuserpasswordinput" type="password" placeholder="Password"/>
            </div>
            <div className="loginpage__getinaccountbutton">
                <button className="getinaccountbutton">Login</button>
            </div>

        </div>
    ); 
}

export default LoginPage; 