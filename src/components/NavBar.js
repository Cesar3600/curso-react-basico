import React from 'react'


const NavBar = props => {
    return(
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={props.logo} width="30" height="30" className="d-inline-block align-top" alt="logo platzi conf"/>
          <span>Conf</span>
          <span>platzi</span>
        </a>
      </nav>
    )
}
export default NavBar