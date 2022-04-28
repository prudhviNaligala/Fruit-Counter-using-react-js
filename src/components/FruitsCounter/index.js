// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onIncreaseMango = () => {
    this.setState(prevState => {
      console.log(prevState.mangoCount)
      return {mangoCount: prevState.mangoCount + 1}
    })
  }

  onIncreaseBanana = () => {
    this.setState(prevState => {
      console.log(prevState.bananaCount)
      return {bananaCount: prevState.bananaCount + 1}
    })
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate {mangoCount} mangoes {bananaCount} bananas
          </h1>
          <div className="image-container">
            <div className="image-button-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button
                className="button"
                type="button"
                onClick={this.onIncreaseMango}
              >
                Eat mango
              </button>
            </div>
            <div className="image-button-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="img"
              />
              <button
                className="button"
                type="button"
                onClick={this.onIncreaseBanana}
              >
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
