import React from 'react'; 
import './WhatSoftAce.css'; 
import PersonIcon from '@material-ui/icons/Person';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import CodeIcon from '@material-ui/icons/Code'; 

function WhatSoftAce() {
    function gettingStarted() {
        window.location.href = './signup'; 
    }
    return (
        <div className="whatsoftace">
            <div className="whatsoftace__titleone">
                <h1 className="titleone">What</h1>
            </div>
            <div className="whatsoftace__titletwo">
                <h1 className="titletwo">is</h1>
            </div>
            <div className="whatsoftace__titlethree">
                <h1 className="titlethree">SoftAce?</h1>
            </div>
            <div className="whatsoftace__abtparagraph">
                <p className="abtparagraph"><center>A platform to host your remote coding interviews, for no charge!</center></p>
            </div>
            <div className="whatsoftace__findusersad">
                <div className="findusersad__findusersadheader">
                    <PersonIcon className="randompersoniconagain"/>
                    <h2 className="findusersadheader"><center>Interviews with users</center></h2>
                    
                </div>
                <div className="findusersad__findusersadmiddletext">
                    <p className="findusersadmiddletext"><center>Through SoftAce, you are able to schedule remote coding interviews or mock coding interviews in the Coding Interviews section of SoftAce where when you would like to schedule an interview, you will be asked wether this is a mock interview or an actual interview, you will have to select if you will be the interviewer or the interviewee, type in the coding problem(s), select the language you would prefer the solution to be coded in, and select the difficulty of the interview in general. If your interview is not a mock interview, you will be asked to invite the interviewee to this interview. If this is a mock interview, then what happens is if you are an interviewee, you will be matched with potential interviewers on this app you can have a mock interview with, if you are an interviewer, your interview will be there for potential mock interviewees' to see</center></p>
                </div>

            </div>
            <div className="whatsoftace__videocallsad">
                <div className="videocallsad__videocallsadheader">
                    <VideoCallIcon className="anotherrandomvideocallicon"/>
                    <h2 className="videocallsadheader"><center>Video Calling</center></h2>
                </div>
                <div className="videocallsad__videocallsadmiddletext">
                    <p className="videocallsaddmiddletext"><center>SoftAce's video calling feature is very high quality and is the best to use for remote interviews. You are able to see your interviewee or interviewer face to face in HD quality for better communication during the interview! You also have options to turn off your camera, mute, leave the call, or keep the interview on pause.</center></p>
                </div>
                

            </div>
            <div className="whatsoftace__codeexecutionenvad">
                <div className="codeexecutionenvad__codeexecutionenvadheader">
                    <CodeIcon className="anotherrandomcodeicon"/>
                    <h2 className="codeexecutionenvadheader"><center>Code-Execution Environment</center></h2>
                </div>
                <div className="codeexecutionenvad__codeexecutionenvadmiddletext">
                    <p className="codeexecutionenvadmiddletext"><center>SoftAce's Code Execution enviroment is one of the best! With its high quality performance and its outstanding user interface, the interviewer is able to share the code-execution environment with their interviewee and are able to use that to code the solution to the coding problem given in the interview! The coding problem has been typed before when creating the interview and gets embedded into the Code-Execution environment so that the problem is ready for you by the time the interview starts!</center></p>
                </div>
            </div>
            <div className="whatsoftace__somemoregettingstartedbutton">
                <div className="somemoregettingstartedbutton">
                    <button className="gettingstartedbuttonagain" onClick={gettingStarted}>Get Started Now!</button>
                </div>
            </div>
            

        </div>
    ); 
}

export default WhatSoftAce; 