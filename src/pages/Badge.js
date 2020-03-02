
import React,{Component} from 'react'
import BadgeList from '../components/BadgeList'
import {Link} from 'react-router-dom'
import Api from '../api'

class Badge extends Component{

  state = {
    data: undefined,
    error: null,
    loading: true
  };

  fetchData = async () => {
    this.setState({
      loading: true,
      error:null
    })
    try{
      const data = await Api.badges.list()
      this.setState({
        data,
        loading:false
      })

    }catch(err){
      this.setState({
        error: err,
        loading:false
      })
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  render(){
    if(this.state.loading === true){
      return 'loading ...'
    }
    if(this.state.error){
      return `error --> ${this.state.error.message}`
    }
    return(
      <div className="container-fluid">
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
          </div>
        </div>
        {
          <BadgeList data={this.state.data}/>
        }
      </div>
    )
  }
}

export default Badge
