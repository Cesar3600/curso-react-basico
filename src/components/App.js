
import React from 'react'
import Card from './card'
const url = 'https://rickandmortyapi.com/api/character/'


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }

  asyncData = async() => {
    await fetch(url)
      .then(response => response.json())
      .then(data => this.setState({data:data.results}))
  }

  componentDidMount(){
    this.asyncData()
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="list-characters">
              {
                this.state.data.map( info => <Card data={info}/>)
              }
            </div>
          </div>
        </div>
  
      </div>
    )
  }
}

export default App















