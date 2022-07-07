import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Topheader from "./Components/Topheader";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import Courasel from "./Components/Courasel";
import Categoryhome from "./Components/Categoryhome";
import Titlewithtimer from "./Components/Assets/Titlewithtimer";
import Allproducts from "./Components/Allproducts";
import Brandslider from "./Components/Brandslider";
import Policymoneyback from "./Components/Policymoneyback";
import Titleforcollection from "./Components/Assets/Titleforcollection";
import Hotdealproducts from "./Components/Hotdealproducts";
import Advertisehome from "./Components/Advertisehome";
import Recentposts from "./Components/Recentposts";
import Footer from "./Components/Footer";


function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#020314";
    }
  };




  return (
    <div className="App">
      <Topheader mode={mode} toggleMode={toggleMode} />
      <Navbar mode={mode} />
      <Navbar2></Navbar2> 
      <Courasel />
      <Policymoneyback mode={mode}/>
      <Categoryhome mode={mode}/>
      <Titlewithtimer mode={mode} firstletter="H" title="OT DEALS" ctimer="1659983662000" />
      <Hotdealproducts mode={mode} Hotcount="10"/>
      <Advertisehome/>
      <Titleforcollection mode={mode} firstletter="T" title="RENDING PRODUCTS"/>
      <Allproducts mode={mode} productcount="10"/>
      <Titleforcollection mode={mode} firstletter="O" title="UR BRANDS"/>
      <Brandslider/>

      <Titleforcollection mode={mode} firstletter="F" title="EATURED PRODUCTS"/>
      <Allproducts mode={mode} productcount="10"/>
      <Titleforcollection mode={mode} firstletter="O" title="UR BLOG"/>
      <Recentposts mode={mode}/>
      
      
   
      <Footer/>
    </div>
  );
}

export default App;
