import React from 'react'
import { Link } from 'react-scroll'



const Header = () => (
    <nav className="navbar fixed-top navbar-inverse navbar-expand-md navbar-light bg-white my-nav" id="menu1">
    <div className="container">
      <a className="navbar-brand h1 mb0" href="/">LOREM TECHNOLOGY</a>
      <button id="min"   className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
          <span className="navbar-toggler-icon navbar-light"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSite">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item mr-2">
            <a><Link className="nav-link" activeClass="bolder" to="component1" spy={true} smooth={true} offset={-65} duration={500}>
              MAIN
            </Link></a>
            </li>
            <li className="nav-item mr-2">
            <a><Link className="nav-link" activeClass="bolder" to="component2" spy={true} smooth={true} offset={-65} duration={500}>
              COMPONENT2
            </Link></a>
            </li>
            <li className="nav-item mr-2">
            <a><Link className="nav-link" activeClass="bolder" to="component3" spy={true} smooth={true} offset={-65} duration={500}>
              COMPONENT3
            </Link></a>
            </li>
            <li className="nav-item" id = "last-item">
            <a><Link className="nav-link" activeClass="bolder" to="component4" spy={true} smooth={true} offset={-65} duration={500}>
              CONTACT
            </Link></a>
            </li>
          </ul>
        </div>
      </div>
  </nav>
)

export default Header
