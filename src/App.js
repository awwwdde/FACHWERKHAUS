import React from "react"
import { Route, Routes } from "react-router-dom"
import Main from "./component/Main/Main"
import Navbar from "./component/Navbar/Navbar"
import Projects from "./component/Project/Projects";
import Materials from "./component/Materials/Materials";
import About from "./component/About us/About";
import Contact from "./component/Contact/Contact";
import SV941 from "./component/special/SV/1/SV941";
import SV944 from "./component/special/SV/4/SV944";
import SV943 from "./component/special/SV/3/SV943";
import SV942 from "./component/special/SV/2/SV942";
import SV945 from "./component/special/SV/5/SV945";
import SV946 from "./component/special/SV/6/SV946";
import SV947 from "./component/special/SV/7/SV947";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/projects' element={<Projects/>}/> 
          <Route exact path='/projects/Narvik' element={<SV941/>}/>
          <Route exact path='/projects//Mangame' element={<SV942/>}/>
          <Route exact path='/projects/Reims' element={<SV943/>}/>
          <Route exact path='/projects/BilBarn' element={<SV944/>}/>
          <Route exact path='/projects/Kapella' element={<SV945/>}/>
          <Route exact path='/projects/Bremen' element={<SV946/>}/>
          <Route exact path='/projects/SV947' element={<SV947/>}/>
        <Route exact path='/materials' element={<Materials/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}


export default App;
