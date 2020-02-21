import React,{Component} from 'react'
import Badges from '../components/Badges'
import BadgesForm from '../components/BadgesForm'


class BadgesNew extends Component{
  state = {
    form:{
      name:'',
      jobTitle:''
    }
  }

  handleChange = e => {
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]:e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Badges form={this.state.form}/>
            </div>
            <div className="col-md-6">
              <BadgesForm 
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
                formData = {this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default BadgesNew