import React from 'react'
import "../App.css";
 function FirstComponent(props) {
  return (
      <div>
        <h1>{props.propsName} Hello Himanshu Soni</h1>
        <h2> This Is Second Component</h2>
        {/* <input type="text" /> */}
        <SecondComponent propsName={props.propsName}/>
      </div>
    )
  }
  function SecondComponent({propsName}) {
          return(
          <div>
          <h1>{propsName}
           This Is Second Component
          </h1>
          
          </div>
  )
}
export default FirstComponent;
