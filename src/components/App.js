import React from 'react'
import BadgesNew from '../pages/BadgesNew'
import Badge from '../pages/Badge'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'




const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path='/badges' component={Badge}/>
        <Route exact path='/badges/new' component={BadgesNew}/>
      </Switch>  
    </Router>
  )
}

export default App