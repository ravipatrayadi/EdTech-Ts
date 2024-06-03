import React from 'react';
import { Link } from 'react-router-dom';

interface NavBarProps  {}

const NavBar = (props: NavBarProps) => {
  return (
    <header>
       <div className="container">
       <div className="header__inner">
           <button className="switch-button"></button>
           <Link to = '/' className="header__logo logo" >
               <img className="logo__img" src="/images/logocircle.svg" alt="img"/>
               <img className="caption" src="/images/captionwhite.svg" width={"160px"} alt="caption"/>
           </Link>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
           </button>

  <div className="header__wrapper" id="headerContent">
         <div className="header__user-nav user-menu">
             <ul className="mobile-nav">
                 <li>
                         <Link to = "/" className="menu__link" >
                         Home
                     </Link>
                 </li>
                 <li>
                     <Link  to = "/about" className="menu__link" asp-action="About" asp-controller="Home">
                         About
                     </Link>
                 </li>
                 <li>
                     <Link to = "/knowvation" className="menu__link" asp-action="Knowvation" asp-controller="Home">
                         Knowvation Learnings
                     </Link>
                 </li>
                 <li>
                     <Link to = "/features" className="menu__link" >
                         Features
                     </Link>
                 </li>
             </ul>
             <Link to = "/register" className="act-btn-reg">Register</Link>
             <Link to ="/login"  className="act-btn">Login</Link>
         </div>
     </div>
  </div> 
  </div>
    </header>
  )
}

export default NavBar