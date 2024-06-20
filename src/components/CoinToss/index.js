import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, isTossing: false, result: 'heads'}

  onClickingTossCoin = () => {
    this.setState({isTossing: true})

    setTimeout(() => {
      const result = Math.floor(Math.random() * 2) ? 'tails' : 'heads'
      this.setState(prevState => ({
        result,
        isTossing: false,
        total: prevState.total + 1,
        heads: result === 'heads' ? prevState.heads + 1 : prevState.heads,
        tails: result === 'tails' ? prevState.tails + 1 : prevState.tails,
      }))
    }, 1000)
  }

  render() {
    const {total, heads, tails, result, isTossing} = this.state
    const imageUrl =
      result === 'heads'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="main-container">
        <div className="coin-toss-container">
          <h1 className="coin-toss-heading">Coin Toss Game</h1>
          <p className="coin-toss-sub-heading">Heads (or) Tails</p>
          <img src={imageUrl} className="coin" alt="toss result" />
          <button
            type="button"
            className="coin-toss-btn"
            onClick={this.onClickingTossCoin}
            disabled={isTossing}
          >
            Toss Coin
          </button>
          <div className="coin-toss-counts">
            <p className="total-count">Total: {total}</p>
            <p className="heads-count">Heads: {heads}</p>
            <p className="tails-count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
