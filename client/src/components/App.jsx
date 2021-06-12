import React, { useState } from "react";
import Form from "./Form";
import Error from "./Error";
import Axios from "axios";
import Secondtab from "./Secondtab";



function App(){

  const [isError,setError] = React.useState(false);
  const [page2,setPage] = React.useState(false);

  var Email = "admin@namasys.co";
  var Pass = "admin123";

  


  function Verify(email,password){
    if(email === Email && Pass === password)
      {
        Axios.post('http://localhost:3001/login', {username: email, password: password})
    .then((response)=>{
      // console.log(response)
      if(response.data["auth"])
      {
        setPage(true);
      }
      // alert("SuccessFully Inserted");
    })
        
      }
      else{
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
  }

    return <div>
       {isError === true && <Error />}
      
      {page2===true ? <Secondtab/>:<Form OnClick={Verify}/>}
      
      
       
      {/* <Form></Form> */}
    </div> 
};


export default App;
