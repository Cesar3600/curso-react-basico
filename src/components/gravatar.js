import React from 'react'
import md5 from 'md5'


const Gravatar = props => {
  const {name,email} = props.data
  const hash = md5(email)
  return(
    <img src={`https://secure.gravatar.com/avatar/${hash}?d=identicon`} alt={name}/>
  )
}



export default Gravatar