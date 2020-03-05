
import React from 'react'

const BadgesForm = props => {
    const {handleChange,handleSubmit,formData : { firstName, jobTitle,email }} = props
    return(
      <div className="col-md-6">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              onChange={handleChange}
              value={firstName}
              type="text"
              className="form-control"
              id="badgeName"
              name='firstName'
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
          <div className="form-group">
            <label>e-mail</label>
            <input
              onChange={handleChange}
              value = {email}
              type="text"
              className="form-control"
              id="badgeEmail"
              name='email'
              placeholder="add e-mail"
            />
          </div>
          <button type="submit" className="btn btn-primary"> ADD + </button>
        </form>
      </div>
    )
}
export default BadgesForm



