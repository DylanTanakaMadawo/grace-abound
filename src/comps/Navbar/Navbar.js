import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
// import mainlogo from '../../images/images/Logos/mainlogo.png'
import { motion } from 'framer-motion'

const Navbar = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])

    const [open, setOpen] = useState(true)

    const handleOpen = () => setOpen(!open)

    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener('scroll');
        }
        }, [])

    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    return (
        <nav className={show ? 'nav-background' : 'navbar-container'} >
            <div className="nav-logo">
                {/* <a href="#home"><img src={mainlogo} alt="website-logo" onClick={() => setOpen(true)}/></a> */}
                <h1><a href="#home" className={show ? 'new-logo-text' : 'logo-text'}>GRACE ABOUND MINISTRIES</a></h1>
            </div>
            <button className={show ? 'hamburger' : 'new-hamburger'} id="hamburger" onClick={handleOpen}>
                {open ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
            </button>
            <motion.div
                className={open ? 'nav-links-container' : 'nav-links-container show'} id='nav-links-container'>
                <ul className='nav-links'>
                    <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.1}} 
                        className="links">
                        <Link
                            className={show ? 'new-nav-anchor' : 'nav-anchor'}
                            onClick={handleOpen}
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >HOME</Link>
                    </motion.li>
                                        <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.2}} 
                        className="links">
                        <Link
                            className={show ? 'new-nav-anchor' : 'nav-anchor'}
                            onClick={handleOpen}
                            activeClass="active"
                            to="events"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >EVENTS</Link>
                    </motion.li>
                    <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.3}} 
                        className="links">
                        <Link
                            className={show ? 'new-nav-anchor' : 'nav-anchor'}
                            onClick={handleOpen}
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >ABOUT US</Link>
                    </motion.li>
                    <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.4}} 
                        className="links">
                        <Link
                            className={show ? 'new-nav-anchor' : 'nav-anchor'}
                            onClick={handleOpen}
                            activeClass="active"
                            to="family"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >OUR FAMILY</Link>
                    </motion.li>
                    <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.6}} 
                        className="links">
                        <Link
                            className={show ? 'new-nav-anchor contact' : 'nav-anchor contact'}
                            onClick={handleOpen}
                            activeClass="active"
                            to="contact_us"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >CONTACT US</Link>
                    </motion.li>
                </ul>
            </motion.div>
    </nav>
    )
}

export default Navbar
