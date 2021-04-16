import React from 'react'
import './Modal.css'
import { motion } from 'framer-motion'

const Modal = ({selectedImage, setSelectedImage}) => {
    const handleClose = (e) => {
        if (e.target.classList.contains('backdrop')){
            setSelectedImage(null)
        }
    }
    return (
        <motion.div
            initial={{opacity: 0}} 
            animate={{opacity: 1}}
            className='backdrop' 
            onClick={handleClose}
        >
            <img src={selectedImage} alt="event"/>
        </motion.div>
    )
}

export default Modal
