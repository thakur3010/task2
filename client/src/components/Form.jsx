import React from "react";


function Form(props){
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

    return <form>
    
         <label htmlFor="email">Email</label>
    <input type="email" onChange={EmailChange} name="email" value={email}></input>
    <label htmlFor="password">Password</label>
    <input type="password" onChange={PasswordChange} name="email" value={password}></input>
    <button  onClick={(event)=>{
        props.OnClick(email,password);
        setPassword("");
        setEmail("");
        event. preventDefault();
    }}>Login</button>
    </form>
    
}

export default Form;