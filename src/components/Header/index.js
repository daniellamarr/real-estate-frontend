import React from 'react';
import { Link } from 'react-router-dom'


const HeaderComponent = () => {
  return (
    <>        
    <nav className="navbar navbar-light bg-light">
    <Link to="/" className="navbar-brand">Home</Link> <br />
    </nav>
    
    </>
  )
}

export default HeaderComponent
