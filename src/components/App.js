
import React,{Component} from 'react'
import Card from './card'
import Loader from 'react-loader-spinner'


class App extends Component{
  constructor(){
    super()
    this.state = {
      data: [],
      error: null,
      loading: true,
      nropage: 1
    }
  }

  asyncData = async () => {
    this.setState({
      loading: true,
      error: null
    })
    try{
      await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nropage}`)
      .then(response => response.json())
      .then(data => this.setState({
        data:this.state.data.concat(data.results),
        nropage: this.state.nropage + 1,
        loading: !this.state.loading
      }))
    }
    catch(err){
      this.setState({
        error:err
      })
    }
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
                this.state.data.map(alias => {
                  return <Card data={alias} id={alias.id}/>
                })
              }
            </div>
            {
              this.state.loading && <Loader 
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}/>
            }
            {
              !this.state.loading && <button className="btn btn-info" onClick={() => this.asyncData()}>Add Characters</button>
            }

          </div>
        </div>
  
      </div>
    )
  }
}

export default App

























// import React from 'react'
// import Card from './card'
// import Loader from 'react-loader-spinner'


// class App extends React.Component {

//   constructor(props){
//     super(props)
//     this.state = {
//       loading:true,
//       error:null,
//       data:[],
//       nextPage:1
//     }
//   }

//   asyncData = async() => {
//     this.setState({loadind: true, error:null})
//     const {nextPage,data} = this.state
//     try{
//       await fetch(`https://rickandmortyapi.com/api/character//?page=${nextPage}`)
//         .then(response => response.json())
//         .then(data => this.setState({
//           data:this.state.data.concat(data.results),
//           loading:false,
//           nextPage: nextPage + 1
//         }))
//     } catch (err){
//         this.setState({
//           error:err
//         })
//     }
//   }

//   componentDidMount(){
//     this.asyncData()
//   }

//   render(){
//     return(
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="list-characters">
//               {
//                 this.state.data.map( info => <Card data={info}/>)
//               }
//               {
//                 this.state.loading && <Loader
//                 type="Puff"
//                 color="#00BFFF"
//                 height={100}
//                 width={100}
//                 timeout={3000}
//              />
//               }
//             </div>
//             <button onClick={()=>this.asyncData()}className="btn btn-primary">Add more characters!</button>
//           </div>
//         </div>
  
//       </div>
//     )
//   }
// }

// export default App















