import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillEmojiSunglassesFill } from 'react-icons/bs'

const Logo = ({ toggleMenu }) => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em onClick={toggleMenu}><BsFillEmojiSunglassesFill /></em>
                <span>TRAVEL<br />YOUTUBE</span>
            </Link>
        </h1>
    )
}

export default Logo
