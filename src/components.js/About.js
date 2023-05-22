import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

function About(){
    const[user,setUser]=useState({});
    const loginRef =useRef(null);
    const emailRef=useRef(null);
    const ageRef=useRef(null);
useEffect(()=>{
   let saveDate= localStorage.getItem(`user`)
   if(saveDate){
    saveDate=JSON.parse(saveDate)
    setUser(saveDate)
   }
},[user])
    function submitForm(){

        let newUser={login:loginRef.current.value,email:emailRef.current.value,age:ageRef.current.value}
           
           localStorage.setItem(`user`,JSON.stringify(newUser))
           setUser(newUser)
           console.log(newUser);
    }
    return<>
<h1>About</h1>
<input ref={loginRef}  className="form-control mb-3" placeholder="Enter login" type="text"/>
<input ref={emailRef} className="form-control mb-3" placeholder="Enter email" type="email"/>
<input ref={ageRef} className="form-control mb-3" placeholder="Age" type="number"/>
<Button onClick={submitForm} variant="success">Submit</Button>
</>
}
export default About;
