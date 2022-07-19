import React from 'react'
import './mycard.css'

const MyCard = ({ bodyText, cardTitle, url }) => {
    return (
        <div className='myCard'>
            this is card
            <img src={url} alt="" />
            <h1>{cardTitle}</h1>
            <p className="text">{bodyText}</p>
        </div>
    )
}

export default MyCard