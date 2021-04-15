import React from 'react'
import Button from '../../../Button/Button'
import './EmailForm.css'

const EmailForm = () => {
    const submitForm = (e) => {
        e.preventDefault();
        console.log('im submitted');
    }
    return (
        <div className="form-section">
            <form className='names'>
                <input type="text" placeholder='Please enter first name'/>
                <input type="text" placeholder='Please enter last name'/>
            </form>
            <form className='contacts'>
                <input type="text" placeholder='Please enter your email'/>
                <input type="text" placeholder='Phone number(optional)'/>
            </form>
            <textarea name="comment" form="usrform" placeholder='Write Us...'></textarea>
            <form className="message-btn" onSubmit={submitForm}>
                <Button value='Send Message' color='#1c1c1c'/>
            </form>
        </div>
    )
}

export default EmailForm
