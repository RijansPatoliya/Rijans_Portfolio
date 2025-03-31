import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from './Component/Navbar/Nav'
import Home from './Pages/Home/Home'
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";

const App = () => {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/project/:category?" element={<Projects />} /> {/* ✅ Dynamic category */}
       </Routes>
    </Router>
    </>
  )
}

export default App