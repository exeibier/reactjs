import React, { Component } from  'react'

export default class Counter extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: 0
        }
    }
    
    componentDidMount() {
        this.intervalId = setInterval(() => {
            if (this.state.data > 19){
                clearInterval(this.intervalId)
            } else {
                this.setState((prevState) => ({
                    data: prevState.data + 1
                
                
                }))
            }
            console.log(this.state.data % 8 === 0)
            
        }, 1000);
            
        
    }

    
    
 
    render() {
        return (
            <div>
                <p>{this.state.data}</p>
            </div>
        )
    }

}