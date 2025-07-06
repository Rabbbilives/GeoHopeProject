import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SanitaryWares from './components/SanitaryWares';
import KitchenHardware from './components/KitchenHardware';
import KitchenAppliances from './components/KitchenAppliances';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Products />
              <WhyChooseUs />
              <Contact />
            </>
          } />
          <Route path="/sanitary-wares" element={<SanitaryWares />} />
          <Route path="/kitchen-hardware" element={<KitchenHardware />} />
          <Route path="/kitchen-appliances" element={<KitchenAppliances />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
