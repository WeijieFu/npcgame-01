import React from 'react'
import '../styles/button.css'

const Button = ({text}) => {
    return (
        <div className="button">
            <div className="button__main">{text}</div>
            <div className="button__shadow"></div>
        </div>
    )
}

export default Button
