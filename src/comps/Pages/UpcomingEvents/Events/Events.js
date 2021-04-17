import React from 'react'
import './Events.css'
import { motion } from 'framer-motion'

const Events = ({title, desc, img}) => {
    return (
        <div className="events-card">
            <h1 className='event-header'>{title}</h1>
            <motion.div
                whileHover={{ opacity: 1}} 
                className="event-image"
            >
                {/* <img src={img} alt="upcoming events" className='img-event'/> */}
            </motion.div>
            <p className='event-desc'>{desc}</p>
        </div>
    )
}

export default Events
