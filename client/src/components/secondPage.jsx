import React from "react";
import Axios from "axios";



function Info(props){
    const [username,setUsername] = React.useState("");
const [number,setNumber] = React.useState("");
const [email,setEmail] = React.useState("");
const [address,setAddress] = React.useState("");

function Change(event){
 
    var n = event.target.name;
    var val = event.target.value;

    if(n === "username"){
        setUsername(val);
    }
    else if(n === "phonenumber"){
        setNumber(val);
    }
    else if(n === "email"){
        setEmail(val);
    }
    else if(n === "address"){
        setAddress(val);
    }
}
function insertion(username,number,email,address){
    Axios.post('http://localhost:3001/insert', {userName: username,num: number,Email: email, Address: address})
    .then(()=>{
      alert("SuccessFully Inserted");
    })
    setUsername("");
    setNumber("");
    setEmail("");
    setAddress("");
    
}

    return <div>
    
    <form onSubmit={(event)=>{
    insertion(username,number,email,address);
    props.onTouch();
    event.preventDefault();
}}>
    <label htmlFor="userName">Username</label>
<input type="text" name="username" placeholder="Username" onChange={Change} value={username} required="required"></input>
<label htmlFor="phoneNumber">Phone Number</label>
<input type="tel" name="phonenumber" placeholder="+91 1234567890" onChange={Change} value={number} maxlength="10" required="required"></input>
<label htmlFor="email">Email</label>
<input type="email" name="email" placeholder="Email" onChange={Change} value={email} required="required"></input>
<label htmlFor="text">Address</label>
<input type="text" name="address" placeholder="Address" onChange={Change} value={address} required="required"></input>
{/* <input type="submit" className="inputclass" onSubmit={(event)=>{
    insertion(username,number,email,address);
    props.onTouch();
    event.preventDefault();

}}></input> */}
<button type="submit">Submit</button>
</form></div>
}

export default Info;