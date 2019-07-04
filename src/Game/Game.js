import React, { Component } from 'react'
import Cell from '../Cell/Cell'

export default class Game extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       width: 10,
       height: 10,
       snake: [
         [1, 1],
         [1, 2],
         [1, 3]
       ],
       field: Array(10).fill(Array(10).fill(1)),
       direction: String(),

    }
    this.timer = this.timer.bind(this)
  }

  timer(){
    let newSnake = this.state.snake.map((snakeCell, index, array )=> {
      return [snakeCell[0]+1, snakeCell[1]];
    });
    console.log(newSnake)
    this.setState({
      snake: newSnake
    });
  }

  componentDidMount() {
    let interval = setInterval(this.timer, 1000)
  }
  
  
  render() {
    return (
      <div>
        {this.state.field.map((y, yIndex) => {
          return (
            <div>
              {
                y.map((x, xIndex) => {
                  return <Cell x={xIndex} 
                               y={yIndex} 
                               key={xIndex+yIndex} 
                               snakeCells={this.state.snake} />
                })
              }
            </div>
          );
        })}
      </div>
    )
  }
}
