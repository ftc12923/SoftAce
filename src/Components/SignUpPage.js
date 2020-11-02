import React from 'react'; 
import './SignUpPage.css'; 

function SignUpPage() {
    return (
        <div className="signuppage">
            <div className="signuppage__signuptitle">
                <h1 className="signuptitle"><center>Create Account</center></h1>
                
            </div>  
            <div className="signuppage__fullnameinput">
                <input className="fullnameinput" placeholder="Name"/>
            </div> 
            <div className="signuppage__emailinput">
                <input className="emailinput" placeholder="Email"/>
            </div>
            <div className="signuppage__createusernameinput">
                <input className="createusernameinput" placeholder="Create your username"/>
            </div>
            <div className="signuppage__createpasswordinput">
                <input className="createpasswordinput" type="password" placeholder="Create your password" />
            </div>
            <div className="signuppage__finishbutton">
                <button className="signuppagefinishbutton">Create Account</button>
            </div>
        </div>
    ); 
}

export default SignUpPage; 