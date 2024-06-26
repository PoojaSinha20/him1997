import { useState } from 'react';
import './App.css';
// import LoginPage from './Components/LoginPage';
// import RegistrationPage from './Components/Registration';

// import FirstComponent from './Components/FirstComponent';
import {Link,useNavigate } from 'react-router-dom';

function App() {
// const[name,setName]=useState('Besant');
const navigate=useNavigate();
  return (
    <div  className="App">
       
    {/* //   <h1 style={{color:'cyan'}}>{name} This Is A First Application</h1>
    //   <h2 className='header1'>{name} Is A Second Component</h2> */}
      {/* <FirstComponent propsName={name}/> */}
      {/* <button onClick={()=>{setName("Organization")}}>Update Name</button> */}
      {/* <RegistrationPage/> */}
      {/* <div style={{display:'grid',placeContent:'center'}}> */}
      <h1>Main Page</h1>
      <button onClick={()=>{navigate('/login')}}>Login</button>
      <button onClick={()=>{navigate('registration')}}>Register</button>
      <Link to="/login">Login</Link>
      <Link to ="/registration">Register</Link>
     {/* </div> */}
     </div>
  );
  
}

export default App;
