import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
        // var count=0;
        //   const [counter,setCounter] 
        // = useState(0);
        const [userName,setUsername]=useState("")
        const [password,setPassword]=useState("")
        const navigate=useNavigate();

        function checkLogin() {
         if (userName !== "") {
          if (password !== "") {
            alert('Login Success');
            navigate("/HomePage");
            
          }else{
            alert(' Password is Required');
          }
          
         }else{
          alert('Username is Required');
         }
        }

          return(
            <div style={{display:'grid',placeContent:'center'}}>
              <h1>Login Page</h1>
              <label>Username</label>
              <input type="text"value={userName}onChange={(e)=>{setUsername(e.target.value)}}></input>
              <label>Password</label>
              <input type="password"value={password}onChange={(e)=>{setPassword(e.target.value)}}></input>
              <br />
              <button onClick={()=>{checkLogin()}}>Login</button>
              {/* <button onClick={()=>count=count+1}>updateCount</button>
              count is:{count}
              <button onClick={()=>setCounter((count)=>count+1)}>updateCounter</button>
              counter is:{counter}
               */}
           </div>
          )
}
export default LoginPage;