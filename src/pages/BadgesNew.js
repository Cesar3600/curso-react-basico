import React,{Component} from 'react'
import Badges from '../components/Badges'
import BadgesForm from '../components/BadgesForm'
import Api from '../api'

class BadgesNew extends Component{
  state = {
    form:{
      firstName:'',
      jobTitle:'',
      email:'',
      avatarUrl:''
    },
    error:null,
    loading:true
  }

  handleChange = e => {
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]:e.target.value
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({
      loading:true, error:null
    })
    try{
      await Api.badges.create(this.state.form)
      this.setState({
        loading:false        
      })
    }catch(err){
      this.setState({
        error:err,
        loading:false
      })
    }
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