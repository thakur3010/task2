import React from "react";
import Button from "./button"
function Input(props){
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    
    function EmailChange(event){
        var em = event.target.value;
        setEmail(em);
    }
    function PasswordChange(event){
        var ps = event.target.value;
        setPassword(ps);
    }


    return <div>
    
    <label htmlFor="email">Email</label>
    <input type="email" onChange={EmailChange} name="email" value={email}></input>
    <label htmlFor="password">Password</label>
    <input type="password" onChange={PasswordChange} name="email" value={password}></input>
    <button  onClick={(event)=>{
        props.OnClick(email,password);
        event. preventDefault();
    }}></button>
    
    </div>
}

export default Input;