import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyApponiment from "./pages/MyApponiment";
import Apponiment from "./pages/Apponiment";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer"; 
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/myApponiment" element={<MyApponiment/>} />
        <Route path="/Apponiment/:docId" element={<Apponiment/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
