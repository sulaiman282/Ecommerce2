import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';


import Topheader from './Components/Topheader';
import Navbar from './Components/Navbar';
import Navbar2 from './Components/Navbar2';
import Texttest from './Components/Courasel';
import Categoryhome from './Components/Categoryhome';


function App() {
  const [mode,setMode]=useState('true');
const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor="white";
  }

  else{
    setMode('light')
    document.body.style.backgroundColor="gray";
  }
}
  


  return (
    <div className="App">
    <Topheader  mode={mode} toggleMode={toggleMode}/>
    
    <Navbar mode={mode}/>
    <Navbar2></Navbar2>

    <Texttest/>
    <Categoryhome/>
    </div>
  );
}

export default App;
