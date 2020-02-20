import React from 'react'

const BadgeList = props => {
  return(
    <ul>
      {
        props.data.map(alias => 
          <li key={alias.id}>
            <div class="media">
              <img src={alias.avatarUrl} class="mr-3" alt={alias.firstName}/>
              <div class="media-body">
                <h5 class="mt-0">{alias.firstName} {alias.lastName}</h5>
                {alias.jobTitle}
                <p>{alias.email}</p>
              </div>
            </div>
          </li>
        )
      }
    </ul>
  )
}

export default BadgeList

