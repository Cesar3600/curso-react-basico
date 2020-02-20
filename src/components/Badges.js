import React from 'react'

const Badges = props => {

    const {name,jobTitle} = props.form

    return(
      <div className="col-md-6">
        <div className="badges">
          <div className="card">
            <img src="/" className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{jobTitle}</p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Badges