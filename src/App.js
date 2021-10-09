import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/fonts/line-icons.css';
import './assets/css/slicknav.css';
import './assets/css/slick.css';
import './assets/css/slick-theme.css';
import './assets/css/animate.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import Header from './Components/Header';
import Services from './Components/Services';
import Features from './Components/Features';
import Clients from './Components/Clients';
import Testimonials from './Components/Testimonials';
import Pricing from './Components/Pricing';
import Subscribe from './Components/Subscribe';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
       <Header />   
       <Services />   
       <Features />   
       <Clients /> 
       <Testimonials /> 
       <Pricing /> 
       <Subscribe /> 
       <Contact /> 
       <Footer /> 
    </div>
  );
}

export default App;