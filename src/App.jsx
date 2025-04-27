import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import "bootstrap-icons/font/bootstrap-icons.css";
import AboutHome from "./pages/AboutHome";
import AboutMain from "./pages/AboutMain";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<AboutHome />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
