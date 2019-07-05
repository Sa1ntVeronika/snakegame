import React, { Component } from 'react';
import Cell from '../Cell/Cell';

import './Game.css'


export default class Game extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       width: 10,
       height: 10,
       snake: [
         [10, 10],
         [10, 11],
         [10, 12]
       ],
       apple: [5, 5],
       field: Array(15).fill(Array(15).fill(1)),
       direction: 'Right'

    }
    this.move = this.move.bind(this)
  }
 
  

  move(){
    let head = [...this.state.snake[0]];
    let newSnake = this.state.snake.map((snakeCell, index, array )=> {
      return array[index]
    });
    switch (this.state.direction) {
      case 'Up':
          head[1] -= 1;
          newSnake.unshift(head);
          newSnake.pop();
          break;
      case 'Down':
          head[1] += 1;
          newSnake.unshift(head);
          newSnake.pop()
          break;
      case 'Left':
          head[0] -= 1;
          newSnake.unshift(head);
          newSnake.pop()
          break;  
      case 'Right':
          head[0] += 1;
          newSnake.unshift(head);
          newSnake.pop()
          break;     
      default: break;
    }
    this.setState({
      snake: newSnake
    });
  }

  changeDirection(code) {
    switch (code) {
      case 37:
          if (this.state.direction !== 'Right') {
            this.setState({
              direction: 'Left'
            })
          };
          break;
      case 38:
          if (this.state.direction !== 'Down') {
            this.setState({
              direction: 'Up'
            })
          };
          break;
      case 39:
          if (this.state.direction !== 'Left') {
            this.setState({
              direction: 'Right'
            })
          };
          break;
      case 40:
          if (this.state.direction !== 'Up') {
            this.setState({
              direction: 'Down'
            })
          };
          break;
      default: break
    }
    this.move();
  }

  componentDidMount() {
    let interval = setInterval(this.move, 500);
    window.addEventListener('keydown', (event)=> {this.changeDirection(event.keyCode)})
  }
  
  
  render() {
    return (
      <div className="Game">
        {this.state.field.map((y, yIndex) => {
          return (
            <div className="Row">
              {
                y.map((x, xIndex) => {
                  return <Cell x={xIndex} 
                               y={yIndex} 
                               key={xIndex+yIndex} 
                               snakeCells={this.state.snake}
                               appleCell = {this.state.apple} />
                })
              }
            </div>
          );
        })}
      </div>
    )
  }
}
