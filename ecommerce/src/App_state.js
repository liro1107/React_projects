import React, { Component } from 'react'
import Procomponenet from './components/Propcomponenet'

export default class App extends Component
{
    state = 
    {
        tname : "likith",
        class : "D",
        roll : "22BTDS129",
    }
  render() {
    return (
      <div>
        <Procomponenet tname = {this.state.tname}
        roll ={this.state.roll} 
        class ={this.state.class}/>
        I am {this.state.tname} sec {this.state.sub}
      </div>
    )
  }
}
