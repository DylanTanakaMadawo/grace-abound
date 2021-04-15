import React from 'react'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Scripture from '../Pages/Scriptures/Scripture'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'

const Home = () => {
    return (
        <>
            <Hero />
            <Scripture />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
