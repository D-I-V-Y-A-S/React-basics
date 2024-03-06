import React, { Component } from 'react'

export class ClassCounterComponent extends Component {
    // use rconst=>reactconstructor 
    constructor(props) {
      super(props)
      this.state = {
         counterNumber:0
      }
    }
      increasefunction=()=>
      {
        this.setState({
            counterNumber:this.state.counterNumber+1
        })
      }
      decreasefunction=()=>
      {
        this.setState({
            counterNumber:this.state.counterNumber-1
        })
      }
  render() {
    return (
        <React.Fragment>
<h3>ClassCounterComponent</h3>
<button onClick={this.decreasefunction}>-1</button>
<p>{this.state.counterNumber}</p>
<button onClick={this.increasefunction}>+1</button>
        </React.Fragment>
    )
  }
}

export default ClassCounterComponent