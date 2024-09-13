import React, { Component } from 'react'

export default class Propcomponenet extends Component {
  render() {
    return (
      <div>
        <h1>
            name = {this.props.tname}
            <br/>
            class = {this.props.class}
            <br/>
            roll = {this.props.roll}
        </h1>
      </div>
    )
  }
}
