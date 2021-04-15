import React from 'react'
import './Button.css'

const Button = ({value, color}) => {
    return (
        <div>
            <input
                type="submit" 
                value={value} 
                className='btn'
                style={{backgroundColor: color}}
            />
        </div>
    )
}

export default Button
