import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';

function App() {
  
  const [Mode, setMode] = useState("light");

  const toggleMode =()=>{

    if(Mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white'
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      
    }
  }
  
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" Mode={Mode} toggleMode={toggleMode}/>
      {/* <Navbar /> */}
      <div className="container my-3">

        <TextForm heading="Enter your text to analyze Below" Mode={Mode}/>
        {/* <About/> */}
      </div>

    </>
  );
}



export default App;
