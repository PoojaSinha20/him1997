import React from 'react'
import "../App.css";
 function FirstComponent() {
  return (
      <div>
        <h1 style={{color:"blue"}}>Hello Himanshu Soni</h1>
        <h2>This Is Second Component</h2>
        {/* <input type="text" /> */}
        <SecondComponent/>
      </div>
    )
  }
  function SecondComponent() {
          return(
          <div>
          <h1>
          This Is Second Component
          </h1>
          
          </div>
  )
}
export default FirstComponent;
