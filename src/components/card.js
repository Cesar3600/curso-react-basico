import React from 'react'
const Card = props => {
  const {name,image,gender,species,status} = props.data
  return(
    <div className="card character mb-5 p-3">
      <img src={image} className="card-img-top" alt={name}/>
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Genero: </b>{gender}</li>        
        <li className="list-group-item"><b>Specie: </b>{species}</li>
        <li className="list-group-item"><b>Status: </b>{status}</li>
      </ul>
    </div>
  )
}

export default Card


