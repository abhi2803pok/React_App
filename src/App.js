import './App.css';
import  { ComponentF } from './Components/Login/ComponentF';
import React, { Component } from 'react';
import { UserProvider } from './Components/userContext';

class App extends Component {
  
render(){
  return (
    <div>
      <UserProvider userName = "abhi">
        <ComponentF></ComponentF>
      </UserProvider> 
    </div>
  );
}
}
//jj
export default App;
