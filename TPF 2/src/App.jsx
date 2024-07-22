import React from 'react';
import './App.css'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Animation from './components/Animation/Animation'
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'
import GetInTouch from './components/GetInTouch/GetInTouch'
import MyPortfolio from './components/MyPortfolio/MyPortfolio'
import MyServices from './components/MyServices/MyServices'
import MySkills from './components/MySkills/MySkills'
import Testimonial from './components/Testimonial/Testimonial'

import { Box } from '@chakra-ui/react'



function App() {

  return (
    <>
      <div>
        <Header />
        <main>
          <Hero />

          <Animation />

          <AboutMe />

          <MyServices />

          <MySkills />

          <MyPortfolio />

          <Testimonial />

          <GetInTouch />

        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
