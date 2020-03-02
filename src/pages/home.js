import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
  return(
    <div className='container'>
      <div className="text-center">
        <h3>home</h3>
        <Link className='btn btn-primary' to='/badges'>Go to Badges</Link>
      </div>
    </div>
  )
}


export default Home