import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';

import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Contant from './components/contact/Contant';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/ScrollUp';
import Work from './components/work/Work';


const App = () => {
  return (
    <>
    <Header/>
    
    <main className='main'>
       <Home/>
       <About/>
       <Skills/>
       <Services/>
       <Qualification/>
       <Work/>
       <Testimonials/>
       <Contant/>
    </main>
       <Footer/>
       <Scrollup/>
    </>
  )
}

export default App