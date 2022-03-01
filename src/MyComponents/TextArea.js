import React from 'react';
import { useState } from 'react';
import Alert from "./Alert";



function TextArea(prop) {
const [text, setText] = useState("");
let [myCase , setMycase] = useState("");

 let handleOnChange = (event)=>{
    let newText = event.target.value ;
    setText(newText);
 }

 let handleUpperCase = ()=>{
     let  newText = text.toUpperCase();
     setText(newText);
     setMycase("Upper");
     setTimeout(()=>{setMycase("");},2000);
 }
 let handleLowerCase = ()=>{
    let  newText = text.toLowerCase();
    setText(newText);
    setMycase("Lower");
    setTimeout(()=>{setMycase("");},2000);
}
function toggleCase(str) {
    return str.toUpperCase().split(' ').map(function(word) {
      return (word.charAt(0).toLowerCase() + word.slice(1));
    }).join(' ');
}
let handleToggleCase = ()=>{
    let  newText = toggleCase(text);
    setText(newText);
    setMycase("Toggle");
    setTimeout(()=>{setMycase("");},2000);
}
let handleClearText = ()=>{
    setText("");
    setMycase("");
}



  return (
      <>
      <Alert case= {myCase}/>
      <div className={`container my-3 bg-${prop.mode === "dark" ? "secondary" : "light"} text-${prop.mode === "dark"?"white" : "black"}`} style = {{color:"black"}}>
            <h3>{prop.title}</h3>
            <div className="form-floating my-3">
            <textarea className="text" placeholder="Enter your text here" style = {{width:"1200px"}} value = {text} onChange={handleOnChange} rows = "8" ></textarea>
            <button type="button" className="btn btn-primary" onClick={handleUpperCase}>UpperCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleLowerCase}>LowerCase</button>
            <button type="button" className="btn btn-primary" onClick={handleToggleCase}>ToggleCase</button>
            <button type="button" className="btn btn-danger mx-2"onClick={handleClearText} >ClearText</button>
            </div>
            <h6>No. of words = {text.length===0? 0 :text.split(" ").length}</h6>
            <h6>No. of characters = {text.length}</h6>
            <h3>Preview </h3>
            <p>{text}</p>
      </div></>

    
  )
}

export default TextArea