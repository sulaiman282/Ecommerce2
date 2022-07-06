import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Topheader from "./Components/Topheader";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import Texttest from "./Components/Courasel";
import Categoryhome from "./Components/Categoryhome";
import Titlewithtimer from "./Components/Assets/Titlewithtimer";
import Allproducts from "./Components/Allproducts";



function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "black";
    }
  };

  return (
    <div className="App">
      <Topheader mode={mode} toggleMode={toggleMode} />
      <Navbar mode={mode} />
      <Navbar2></Navbar2>
      <Texttest />
      <Categoryhome mode={mode}/>
      <Titlewithtimer mode={mode} firstletter="H" title="OT DEALS" ctimer="1659983662000" />
      <Allproducts mode={mode}/>
    
    </div>
  );
}

export default App;
