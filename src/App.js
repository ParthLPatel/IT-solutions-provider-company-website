import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import NavBar from './NavBar';
import Footer from './Footer';

import HomePage from './Home';
import AboutPage from './About';
import ContactPage from './Contact';
import ServicePage from './Service';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />}> </Route>
          <Route path="/about" element={<AboutPage />} ></Route>
          <Route path="/contact" element={<ContactPage />} > </Route>
          <Route path="/service" element={<ServicePage />} > </Route>
        </Routes>
        <Footer />
    </Router>

    </div>
  );
}

export default App;
