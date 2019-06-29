import React, { Component } from 'react'
import Cell from '../Cell/Cell'

export default class Game extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       width: 10,
       height: 10,
       snake: [

       ],
       field: Array(3).fill(Array(2).fill(1)),
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
                  return <Cell x={xIndex} y={yIndex} key={x} />
                })
              }
            </div>
          );
        })}
      </div>
    )
  }
}
