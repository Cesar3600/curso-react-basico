import React,{Component} from 'react'


class NavBar extends Component{
  render(){
    return(
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src={this.props.logo} width="30" height="30" class="d-inline-block align-top" alt="logo platzi conf"/>
          <span>Conf</span>
          <span>platzi</span>
        </a>
      </nav>
    )
  }
}
export default NavBar