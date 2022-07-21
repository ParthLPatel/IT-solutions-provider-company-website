import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = ()=>{
    return(
        <React.Fragment>

    <div className='container'>
        <div className='row'>
            <div className='col-12 mx-auto'>


<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Patel IT Solutions</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <NavLink 
        exact
        className="nav-link" 
        activeClassName='menu_active'
        to="/">Home 
        <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
        exact 
        activeClassName='menu_active'
        className="nav-link" 
        to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
        exact 
        activeClassName='menu_active'
        className="nav-link" 
        to="/service">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
        exact 
        activeClassName='menu_active'
        className="nav-link" 
        to="/contact">Contact Us</NavLink>
      </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    </div>
</div>

        </React.Fragment>
    );
}

export default NavBar;