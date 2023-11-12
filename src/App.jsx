import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FirstProject from './pages/FirstProject';
import Home from './pages/Home';
import SecondProject from './pages/SecondProject';
import ThirdProject from './pages/ThirdProject';
import FourthProject from './pages/FourthProject';
function App() {

  return ( 

  <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="first-project" element={<FirstProject />} />
      <Route path="second-project" element={<SecondProject />} />
      <Route path='third-project' element={<ThirdProject />} />
      <Route path='fourth-project' element={<FourthProject />} />
      </Routes>
  </BrowserRouter>
 
  )
}

export default App
