import React from 'react'
import EmailForm from './EmailForm/EmailForm'
import FeelFree from './FeelFree/FeelFree'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-us-section' id='contact_us'>
            <FeelFree />
            <EmailForm />
        </div>
    )
}

export default Contact
