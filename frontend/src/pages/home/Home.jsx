import React from 'react'
import Banner from './Banner'
import Recommened from './Recommened'
import Cards from './SmartCityGrid'
import Contact from './Contact'
import FAQ from './FAQ'
import About from './About'
const Home = () => {
  return (
    <>
        <Banner/>
        <About/>
        <Cards/>
        <Recommened/>
        <Contact/>
        <FAQ/>
    </>
  )
}

export default Home