import React, { Component } from 'react'; //Extraemos el componente desde la importacion


export default class Clock extends Component {
  constructor(props) {
    super (props)
    this.state = {
      date: new Date(),
      name:'David'
    }
  }
   componentDidMount(){
     
     this.dateIntervale = setInterval(() => this.tick(),1000)
   }

   componentWillUnmount () {
    clearInterval(this.dateIntervale)
   }

   tick(){
    this.setState({
      date: new Date()
    })
   }
  render () {
    return (
      <div>
          <p>{this.state.name}</p>
          <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
  )
  }
   
}



