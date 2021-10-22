import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            
            <Link to='/'>Home </Link><br />
            <Link to='/about'>About </Link><br />
            <Link to='/product'>Product </Link><br />
            <Link to='/productitem'>ProductItem </Link>
        </div>
    )
}

export default NavBar
