import React, { useState } from 'react'
import LoginPage from './LoginPage';

function RegistrationPage() {
  const[userName,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[Mobile,setMobile]=useState("");
  const[address,setAddress]=useState("");

    function checkRegister() {
      if(userName !==""){
      if (password !=="") {
        if(Mobile !==""){
          if(address !==""){
            alert('Registration Completed');
          }else{
            alert('Address Is Required');
          }

        }else{
          alert('Mobile Number Is Required');
        }
        
      }else{
        alert("Password Is Required")
      } 

      }else{
        alert('Username Is Required');
      }
    }      
return (
      <div style={{display:"grid",placeContent:"center"}}>
        <h1>Registration Page</h1>
        <label>User Name</label>
        <input type='text' value={userName}onChange={(e)=>{setUsername(e.target.value)}}></input>
        <label>Password</label>
        <input type='password'value={password}onChange={(e)=>{setPassword(e.target.value)}}></input>
        <label>Mobile Number</label>
        <input type='text' value={Mobile}onChange={(e)=>{setMobile(e.target.value)}}></input>
        <label>Address</label>
        <input type='text'value={address}onChange={(e)=>{setAddress(e.target.value)}}></input>
       <br /> <button onClick={()=>{checkRegister()}}>Register</button>
       <LoginPage registerUserName={userName} registerPassword={password}/> 
  </div>
    )
  }
export default RegistrationPage;
