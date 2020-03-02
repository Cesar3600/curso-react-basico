import React from 'react'
import BadgesNew from '../pages/BadgesNew'
import Badge from '../pages/Badge'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from './layout'
import notFound from './notfound'
import Home from '../pages/home'

const App = () => {
  return(
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/badges' component={Badge}/>
          <Route exact path='/badges/new' component={BadgesNew}/>
          <Route component={notFound}/>
        </Switch>  
      </Layout>
    </Router>
  )
}

export default App