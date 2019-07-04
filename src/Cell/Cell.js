import React, { Component } from 'react';
import './Cell.css';

export default class Cell extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      snakeCell: 'n',
      foodCell: true,
    }
  }
  
  checkForSnakeCells() {
    if (this.props.snakeCells.some(cell => cell[0] === this.props.x && cell[1] === this.props.y
    )) {
      this.setState({
        snakeCell: 's'
      })
    } else {
      this.setState({
        snakeCell: 'n'
      })
    }
  }

  componentDidMount() {    
    this.checkForSnakeCells();
  }

  componentWillReceiveProps(nextProps) {
    this.checkForSnakeCells();
  }

  render() {
    return (
      <span className='cell'>
         {this.state.snakeCell}
      </span>
    )
  }
}
