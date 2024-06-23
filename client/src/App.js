import React from 'react';
import Layouttemp from './components/Layouttrmp/Layouttemp';
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Tech from "./pages/Tech/Tech";
import WorkExp from "./pages/workExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from './components/MobileNav/MobileNav';
import './App.css';

function App() {
  const [theme] = useTheme();
  return (
    <>
    
      <div id={theme}>
        <MobileNav/>
        <Layouttemp />
        <div className="container">
          <About />
          <Education />
          <Tech />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3 ">
         
            <h4 className="text-center aaa">Made With 😍 By Ayush </h4>
         
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;