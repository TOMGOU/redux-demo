import React, { Component } from 'react'
import { subscribe, dispatch, getState } from "./store"
import { add, minus } from './store/reducers/count'

export default class App extends Component {
  componentDidMount() {
    subscribe(() => {
      this.forceUpdate()
    })
  }
  add() {
    dispatch(add(2))
  }
  minus() {
    dispatch(minus(3))
  }
  asyAdd = () => {
    dispatch(dispatch => {
      setTimeout(() => {
        dispatch(add(4))
      }, 2000)
      console.log(getState())
    })
  }
  render() {
    const {number} = getState()
    return (
      <div className="App">
        <h3>ReduxPage</h3>
        <p>{number}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.asyAdd}>asyAdd</button>
      </div>
    );
  }
}
