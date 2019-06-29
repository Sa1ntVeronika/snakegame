import React, { Component } from 'react';
import './Cell.css';

export default class Cell extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       snakeCell: true,
       foodCell: true,

    }
  }
  
  render() {
    return (
      <span className='cell'>
         {this.props.y} {this.props.x}
      </span>
    )
  }
}
