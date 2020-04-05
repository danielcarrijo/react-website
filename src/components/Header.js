import React from 'react'


const Header = () => (
    <nav className="navbar fixed-top navbar-inverse navbar-expand-md navbar-light bg-white my-nav" id="menu1">
    <div className="container">
      <a className="navbar-brand h1 mb0" href="/">LOREM TECNOLOGIA</a>
      <button id="min"   className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
          <span className="navbar-toggler-icon navbar-light"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSite">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item mr-2">
              <a className="nav-link" href="/">NOTÍCIAS</a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link" href="/">SOBRE</a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link" href="/">SERVIÇOS</a>
            </li>
            <li className="nav-item" id = "last-item">
              <a className="nav-link" href="/">CONTATOS</a>
            </li>
          </ul>
        </div>
      </div>
  </nav>
)

export default Header
