import React from 'react';
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to ="/"className="navbar-brand">Navbar</Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <NavLink activeClassName="active" className="nav-link " aria-current="page"  to='/'>Home</NavLink>
            <NavLink activeClassName="active" to='/about' className="nav-link" >About</NavLink>
            <NavLink activeClassName="active" to='/login' className="nav-link" >Login</NavLink> */}
            <NavLink className={({isActive}) => "nav-link" + (isActive?' active':'' )} aria-current="page"  to='/'>Home</NavLink>
            <NavLink className={({isActive}) => "nav-link" + (isActive?' active':'' )} to='/about'>About</NavLink>
            <NavLink to='/login' className={({isActive}) => "nav-link" + (isActive?' active':'' )} >Login</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
