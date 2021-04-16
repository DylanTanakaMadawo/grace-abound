import React, { useState } from 'react'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Scripture from '../Pages/Scriptures/Scripture'
import Modal from '../Pages/UpcomingEvents/Modal/Modal'
import UpcomingEvents from '../Pages/UpcomingEvents/UpcomingEvents'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import './Home.css'

const Home = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    return (
        <div className='home'>
            <Hero />
            <Scripture />
            <UpcomingEvents setSelectedImage={setSelectedImage}/>
            { 
                selectedImage && 
                <Modal 
                    selectedImage={selectedImage} 
                    setSelectedImage={setSelectedImage}
                /> 
            }
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
