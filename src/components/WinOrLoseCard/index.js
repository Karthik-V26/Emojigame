import './index.css'

const WinOrLoseCard = props => {
  const {gameStatus, score, changeReset} = props
  const reset = () => {
    changeReset()
  }

  return gameStatus ? (
    <div className="won-lose-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        className="status-image"
        alt="gameStatus"
      />
      <div className="text-container">
        <h1 className="heading-win-lose">You Won</h1>
        <div className="text">
          <p className="best-score-text">Best Score</p>
          <p className="score-text">{score}/12</p>
          <button className="button-again" type="button" onClick={reset}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="won-lose-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        className="status-image"
        alt="gameStatus"
      />
      <div className="text-container">
        <h1 className="heading-win-lose">You Lose</h1>
        <div className="text">
          <p className="best-score-text">Score</p>
          <p className="score-text">{score}/12</p>
          <button className="button-again" type="button" onClick={reset}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
