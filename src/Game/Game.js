import React, { Component } from 'react'
import Cell from '../Cell/Cell'

export default class Game extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       width: 10,
       height: 10,
       snake: [
         [1,1],
         [1,2],
         [1,3]
       ],
       field: Array(10).fill(Array(10).fill(1)),
       direction: String(),

    }
  }
  
  render() {
    return (
      <div>
        {this.state.field.map((x, xIndex) => {
          return (
            <div>
              {
                x.map((y, yIndex) => {
                  return <Cell x={xIndex} y={yIndex} key={xIndex+yIndex} snakeCells={this.state.snake} />
                })
              }
            </div>
          );
        })}
      </div>
    )
  }
}
