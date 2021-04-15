import React, { useEffect } from 'react'
import './Hero.css'

const Hero = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="hero-section" id='home'>
            <div className='hero-container'>
                <h1 className='hero-header'>2021 YEAR OF HIS RIGHTEOUSNESS.</h1>
                <p>He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake. <b>PSALMS 23:3 (KJV)</b></p>
            </div>
        </div>
        
    )
}

export default Hero