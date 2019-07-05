import React, { Component } from 'react';
import './Cell.css';

export default class Cell extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      snakeCell: false,
      appleCell: false,
    }
  }
  
  checkForSnakeCells() {
    if (this.props.snakeCells.some(cell => cell[0] === this.props.x && cell[1] === this.props.y
    )) {
      this.setState({
        snakeCell: true
      })
    } else {
      this.setState({
        snakeCell: false
      })
    }
  }

  checkForAppleCells() {
    if (this.props.appleCell[0] === this.props.x && this.props.appleCell[1] === this.props.y) {
      this.setState({
        appleCell: true
      })
    }
  }

  componentDidMount() {    
    this.checkForSnakeCells();
    this.checkForAppleCells();
  }

  componentWillReceiveProps(nextProps) {
    this.checkForSnakeCells();
  }

  render() {
    return (
      <div className={this.state.snakeCell ? 'cell snake' : 
                                              this.state.appleCell ? 'cell apple' :
                                              'cell'}>
      </div>
    )
  }
}
