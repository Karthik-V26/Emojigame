import './index.css'

const NavBar = props => {
  const {score, maxScore, winStatus} = props
  return winStatus ? (
    <div className="nav-bar">
      <div className="sc">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="game-logo"
          alt="game-logo"
        />
        <h1 className="score-top-text">Emoji Game</h1>
      </div>
    </div>
  ) : (
    <div className="nav-bar">
      <div className="sc">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="game-logo"
          alt="game-logo"
        />
        <h1 className="score-top-text">Emoji Game</h1>
      </div>
      <div className="sc">
        <p className="score-top-text">Score: {score}</p>
        <p className="score-top-text">Top Score: {maxScore}</p>
      </div>
    </div>
  )
}

export default NavBar
