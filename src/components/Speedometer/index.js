// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    this.setState(prevState =>
      prevState.speed < 200 ? {speed: prevState.speed + 10} : {speed: 200},
    )
  }

  onDecrement = () => {
    this.setState(prevState =>
      prevState.speed > 0 ? {speed: prevState.speed - 10} : {speed: 0},
    )
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer-img"
          alt="speedometer"
        />
        <h1 className="heading">Speed is {speed}mph</h1>
        <p className="desc">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="accelerate-btn"
            type="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="apply-brake-btn"
            type="button"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
