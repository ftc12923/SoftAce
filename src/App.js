import React from 'react';
import {Component} from 'react'; 
import fire from './config/Fire'; 
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link 
} from "react-router-dom";  
import './App.css'; 
import HomeHeader from './Components/HomeHeader'; 
import SoftAceTeamHeader from './Components/SoftAceTeamHeader';
import WhatSoftAce from './Components/WhatSoftAce'; 
import SignUpPage from './Components/SignUpPage'; 
import LoginPage from './Components/LoginPage';
import DashboardHeader from './Components/DashboardHeader';

 


 

class App extends Component{
  constructor(props) {
    super(props); 
    this.state = {
      user: {}, 

    }
  }

  componentDidMount(){
    this.authListener(); 
  }


  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user); 
      if(user) {
        this.setState({ user }); 
        //localStorage.setItem('user', user.uid); 
      } else {
        this.setState({ user: null });
        //localStorage.removeItem('user');  

      }

    })
  }


  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
          
           <Route path="/login">
             <LoginPage />
            
           </Route>
           <Route path="/signup">
             <SignUpPage />
  
           </Route>
           <Route path="/livestreams">
  
           </Route> 
           <Route path="/mockinterviews">
  
           </Route>
           <Route path="/preview">
  
           </Route>
           <Route path="/team">
             <SoftAceTeamHeader />
  
           </Route>
           <Route path="/dashboard">
             <DashboardHeader />

           </Route>
           <Route path="/">  
           <HomeHeader />
           <WhatSoftAce />
           </Route>  
          </Switch>
        </div>
  
      </Router>
      
    );
    
  }
  
  
} 

export default App;
