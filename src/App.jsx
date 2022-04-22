import * as React from "react";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { Home } from "./components/pages/Home";
import { Tech } from "./components/pages/Tech";
import { Contact } from "./components/pages/Contact";
import { Projects } from "./components/pages/Projects";
import { Education } from "./components/pages/Education";
import { Jobs } from "./components/pages/Jobs";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>  
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/tech" element={<Tech />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
      <Footer /> 
    </> 
  );
}

export default App;
