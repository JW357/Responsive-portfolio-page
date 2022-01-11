import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';
import theme from './theme';
import About from './components/Home/About';
import Contact from './components/Home/Contact';
import Nav from './components/Nav';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
