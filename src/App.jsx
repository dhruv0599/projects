import './App.css'
import { createBrowserRouter, Route, Routes } from 'react-router'
import Navbar from '../components/Navbar'
import Home from '../../My-portfolio/components/Home'
import About from '../../My-portfolio/components/About'
import Project from '../../My-portfolio/components/Project'
import Contact from '../../My-portfolio/components/Contact'
import Content from '../components/Content'
function App() {
    const router = createBrowserRouter ([
    {path: "/",
      element: <Home/>
    },
    {
      path: "about",
      element: <About/>
    },
    {
      path: "project",
      element: <Project/>
    },
    {
      path: "contact",
      element: <Contact/>
    }
  ]) 


  return (
    <div>
      <Navbar />
      <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="project" element={<Project />} />
            <Route path="contact" element={<Contact />} /> 
        </Routes>
      </div>
      
    </div>
      )
}

export default App
