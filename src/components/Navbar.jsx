import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <Link className='link' to={'/'}><h2><i>Vikash Patidar</i></h2></Link>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/About'}>About</Link></li>
            <li><Link to={'/Service'}>Service</Link></li>
            <li><Link to={'/Projects'}>Projects</Link></li>
            <li><Link to={'/Contact'}>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar;
