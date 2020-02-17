import React,{Component} from 'react'
import NavBar from './NavBar'
import Logo from '../images/logo.svg'
import Badges from './Badges'
import BadgesForm from './BadgesForm'

import '../pages/styles/BadgesNew.css'
import header from '../pages/styles/badge-header.svg'

class BadgesNew extends Component{
  render(){
    return(
      <div>
        <NavBar logo={Logo}/>
      </div>
    )
  }
}
export default BadgesNew