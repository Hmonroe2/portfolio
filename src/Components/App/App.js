import './App.css';
import Nav from '../Nav/Nav';

import Homepage from '../HomePage/Homepage';
import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Projects from "../Projects/Projects"
import Contact from '../Contact/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} /> 
        <Route path='/About' element={<About />} /> 
        <Route path='Projects' element={<Projects />} /> 
        <Route path= 'Contact' element={<Contact />} /> 
      </Routes>
    </div>
  );
}

export default App;
