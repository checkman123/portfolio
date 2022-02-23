import React from 'react'

//import everything instead one each with 
//import About from './container/About'

import { About, Footer, Header, Skills, Testimonials, Work} from './container/index.js';
import { Navbar } from './components/index.js';

import './App.scss'

const App = () => {
  return (
    <div className ="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default App