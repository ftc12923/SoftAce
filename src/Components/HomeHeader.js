import React from 'react'; 
import './HomeHeader.css'; 
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

function HomeHeader() {
    function againgettingStarted() {
        window.location.href = './signup'; 
    }
    function logingIn() {
        window.location.href = './login'; 
    }
    return (
        <div className="homeheader">
            <div className="homeheader__softacetitle">
                <h1 className="softacetitle">SoftAce</h1>
            </div>
            <div className="homeheader__softacemockinterviewsa">
                <a className="softacemockinterviewsa" href="/mockinterviews">Coding Interviews</a>
            </div>
            <div className="homeheader__softacelivestreamsa">
                <a className="softacelivestreamsa" href="/livestreams">Live Streams</a> 
            </div>
            <div className="homeheader__softaceteama">
                <a className="softaceteama" href="/team">The SoftAce Team</a>
            </div>
            <div className="homeheader__softacepreviewa">
                <a className="softacepreviewa" href="/preview">SoftAce Preview</a>
            </div>

            <div className="homeheader__softacedesc">
                <h3>Host your remote coding interviews</h3>
            </div>

            <div className="homeheader__softacegetstartedbtn">
                <button className="getstartedbtn" onClick={againgettingStarted}>
                    Get Started
                    <CheckBoxIcon className="checkboxiconget"/>
                </button>
            </div>
            <div className="homeheader__softaceloginbtn">
                <button className="loginstartbtn" onClick={logingIn}>
                    Login
                    <VpnKeyIcon className="vpnkeyicon"/>

                </button>
            </div>

            
            
        </div>
    ); 
}

export default HomeHeader; 