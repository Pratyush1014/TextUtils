import logo from './logo.svg';
import './App.css';
import Navbar from "./MyComponents/Navbar";
import TextArea from "./MyComponents/TextArea";
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState("light");
  const [myStyle, setMystyle] = useState({color:"black"});
  

  let handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setMystyle({color:"white"});
    } else {
      setMode("light");
      setMystyle({color:"black"});
    }
  };


  return (
    <>
    <Navbar title= "TextUtils" mode={mode} myStyle={myStyle} handleMode={handleMode}/>
    <TextArea title = "Enter your text" mode={mode}/>
    
    </>
  );
}

export default App;
