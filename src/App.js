
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";


function App() {
 const[mode,setMode]= useState('light');
 const[alert,setAlert]=useState(null)

 const showAlert=(message,type)=>{
 setAlert({
  msg:message,
  type:type
 })
 setTimeout(() => {
  setAlert(null)
 }, 1500);
 }
 const toggleMode=()=>{
  if( mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor="#042743"
    showAlert("Dark mode has been enabled","success")
    document.title='textutils-dark mode'
    // setInterval(() => {
    //   document.title='textutils is amazing mode'
    // }, 2000);
  }
  else{
    setMode('light')
    document.body.style.backgroundColor="white"
    showAlert("Light mode has been enabled","success")
    document.title='textutils-light mode'
    // setInterval(() => {
    //   document.title='install textutils now'
    // }, 1500);
  }
 }
  return (
  <>
{/* <Router> */}
<Navbar title="Textutils"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
  {/* <Routes> */}
  {/* <Route  exact path="/about" element={<About />}></Route> */}
  {/* <Route exact path="/"element={<TextForm  showAlert={showAlert}  heading="enter the text to analyse" mode={mode}/>}></Route> */}
  <TextForm showAlert={showAlert}  heading="enter the text to analyse" mode={mode}/>
  {/* </Routes> */}
</div>
{/* </Router> */}

  </>
   
  );
}

export default App;
