import { BrowserRouter, Link,Route,Routes } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Projects from "./Projects"
import Skills from "./Skills"
 export default  function Navbar() {

  
  return (
    <>
  
     <nav>
            <Link to="/home">Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>

     </nav>
     <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/skills" element={<Skills/>}/>


     </Routes> 
    </>
  )
}


