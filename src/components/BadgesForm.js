
import React,{Component} from 'react'

class BadgesForm extends Component{

  render(){
    const {handleChange,handleSubmit,formData : { name, jobTitle }} = this.props
    return(
      <div className="col-md-6">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              onChange={handleChange}
              value={name}
              type="text"
              className="form-control"
              id="badgeName"
              name='name'
              placeholder="add name"
            />
          </div>
          <div className="form-group">
            <label>Job title</label>
            <input
              onChange={handleChange}
              value = {jobTitle}
              type="text"
              className="form-control"
              id="badgeCharge"
              name='jobTitle'
              placeholder="add charge"
            />
          </div>
          <button type="submit" className="btn btn-primary"> ADD + </button>
        </form>
      </div>
    )
  }
}
export default BadgesForm



