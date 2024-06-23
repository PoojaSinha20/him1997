import { useState } from 'react';
import './App.css';
import LoginPage from './Components/LoginPage';
import RegistrationPage from './Components/Registration';

import FirstComponent from './Components/FirstComponent';

function App() {
const[name,setName]=useState('Besant');
  return (
    <div className="App">
      <h1 style={{color:'cyan'}}>{name} This Is A First Application</h1>
      <h2 className='header1'>{name} Is A Second Component</h2>
      <FirstComponent propsName={name}/>
      <button onClick={()=>{setName("Organization")}}>Update Name</button>
      <RegistrationPage/>
      
     
      </div>
  );
  
}

export default App;
