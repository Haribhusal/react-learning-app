import React from 'react'
import MyCard from './MyCard'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>This is my header using React.js</div>
            <MyCard url="https://picsum.photos/id/22/400/300" cardTitle="This is card title of Header" bodyText="header"></MyCard>
        </div>
    )
}

export default Header

