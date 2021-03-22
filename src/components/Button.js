import React from 'react'
import '../styles/button.css'

const Button = ({text}) => {

    const handleTouchStart = (e)=>{
        e.target.style.transform = "translateY(0.4rem)"
    }
    const handleTouchEnd = (e)=>{
        e.target.style.transform = "translateY(0rem)"
    }

    return (
        <div className="button" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="button__main">{text}</div>
            <div className="button__shadow"></div>
        </div>
    )
}

export default Button
