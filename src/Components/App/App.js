import './App.css';
import Nav from '../Nav/Nav';

import Homepage from '../HomePage/Homepage';
import { Route, Routes } from 'react-router-dom';
import About from '../About/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} /> 
        <Route path='/About' element={<About /> } /> 
      </Routes>
    </div>
  );
}

export default App;
