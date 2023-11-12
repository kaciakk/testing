import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='nav'>
    <Link to="/">Home</Link>
    <Link to="/first-project">First Project</Link>
    <Link to="/second-project">Second Project</Link>
    <Link to="/third-project">Third Project</Link>
    <Link to="/fourth-project">Fourth Project</Link>
    </nav>
  )
}
