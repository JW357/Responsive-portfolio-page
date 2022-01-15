import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';
import theme from './theme';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Image1 from './components/Home/ImageComponents/Image1/Image1';
import Image2 from './components/Home/ImageComponents/Image2/Image2';
import Image3 from './components/Home/ImageComponents/Image3/Image3';
import Image4 from './components/Home/ImageComponents/Image4/Image4';
import Image5 from './components/Home/ImageComponents/Image5/Image5';
import Image6 from './components/Home/ImageComponents/Image6/Image6';
import Image7 from './components/Home/ImageComponents/Image7/Image7';
import Image8 from './components/Home/ImageComponents/Image8/Image8';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Image1" element={<Image1 />} />
          <Route path="/Image2" element={<Image2 />} />
          <Route path="/Image3" element={<Image3 />} />
          <Route path="/Image4" element={<Image4 />} />
          <Route path="/Image5" element={<Image5 />} />
          <Route path="/Image6" element={<Image6 />} />
          <Route path="/Image7" element={<Image7 />} />
          <Route path="/Image8" element={<Image8 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
