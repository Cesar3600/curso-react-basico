import React from 'react'
import NavBar from './NavBar'
import logo from '../images/logo.svg'


const Layout = props => {
  return(
    <>
      <NavBar logo={logo}/>
       {props.children}
    </>
  )
}

export default Layout