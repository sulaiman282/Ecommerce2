import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Routes, Route } from "react-router-dom";


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
import Login from "./Components/pages/Login";
import Signup from "./Components/pages/Signup";
import Seemore from "./Components/Assets/Seemore"
import Services from "./Components/pages/Services";
import Contactus from "./Components/pages/Contactus";
import Blog from "./Components/pages/Blog";





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
      <Navbar2/> 
     

<Routes>
        <Route path="*" element={<div><Courasel />
        <Policymoneyback mode={mode}/>
        <Categoryhome mode={mode}/>
        <Titlewithtimer mode={mode} firstletter="H" title="OT DEALS" ctimer="1659983662000" />
        <Hotdealproducts mode={mode} Hotcount="10"/>
        <Seemore mode={mode} turl={"./hot_deals"}/>
        <Advertisehome/>
        <Titleforcollection mode={mode} firstletter="T" title="RENDING PRODUCTS"/>
        <Allproducts mode={mode} productcount="10"/>
        <Seemore mode={mode} turl={"./trending"}/>
        <Titleforcollection mode={mode} firstletter="O" title="UR BRANDS"/>
        <Brandslider/>
        <Titleforcollection mode={mode} firstletter="F" title="EATURED PRODUCTS"/>
        <Allproducts mode={mode} productcount="15"/>
        <Seemore mode={mode} turl={"./new-arrivals"}/>
        <Titleforcollection mode={mode} firstletter="O" title="UR BLOG"/>
        <Recentposts mode={mode}/></div>} />


        <Route exact path="/login" element={<div><Login/></div>} />
        <Route exact path="/Signup" element={<div><Signup/></div>} />


        <Route exact path="/all_product" element={<div><Titleforcollection mode={mode} firstletter="A" title="LL PRODUCTS"/> <Allproducts mode={mode} productcount="50"/></div>} />



        <Route exact path="/hot_deals" element={<div><Titlewithtimer mode={mode} firstletter="H" title="OT DEALS" ctimer="1659983662000" />
        <Hotdealproducts mode={mode} Hotcount="50"/></div>} />



        <Route exact path="/trending" element={<div><Titleforcollection mode={mode} firstletter="T" title="RENDING PRODUCTS"/> <Allproducts mode={mode} productcount="50"/></div>} />

        <Route exact path="/new-arrivals" element={<div><Titleforcollection mode={mode} firstletter="N" title="EW ARRIVAL PRODUCTS"/> <Allproducts mode={mode} productcount="50"/></div>} />


          <Route exact path="/products/cloths" element={<div><Titleforcollection mode={mode} firstletter="A" title="LL COTHS"/> <Allproducts mode={mode} productcount="35"/></div>} />

          <Route exact path="/products/electronics" element={<div><Titleforcollection mode={mode} firstletter="A" title="LL ELECTRONICS"/> <Allproducts mode={mode} productcount="40"/></div>} />


          <Route exact path="/products/furniture" element={<div><Titleforcollection mode={mode} firstletter="A" title="LL FURNITURE"/> <Allproducts mode={mode} productcount="25"/></div>} />

          <Route exact path="/products/shoes" element={<div><Titleforcollection mode={mode} firstletter="A" title="LL SHOES"/> <Allproducts mode={mode} productcount="23"/></div>} />

          <Route exact path="/services" element={<div><Services mode={mode}/></div>} />


        
          <Route path="/contact_us" element={<div><Contactus/></div>} />

          <Route path="/blog" element={<div><Blog mode={mode}/></div>} />











        <Route path="/000" element={<div></div>} />
        <Route exact path="/007" element={<div></div>} />



        services
  </Routes>


      
      
      
   
      <Footer/>
    </div>
  );
}

export default App;
