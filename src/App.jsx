import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import AllStudents from "./components/Students/AllStudents";
import AddorUpdateStudent from "./components/Students/AddorUpdateStudent";
import Home from "./components/Home/Home";
import NotFound from "./components/Not found/NotFound";

import { StudentProvider } from "./context/StudentContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <StudentProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/students" element={<AllStudents />} />
          <Route path="/students/:id" element={<AddorUpdateStudent />} />
          <Route path="/add-students" element={<AddorUpdateStudent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </StudentProvider>
  );
}

export default App;
