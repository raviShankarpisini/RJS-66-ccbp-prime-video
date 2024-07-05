// Write your code here.

import './index.css'

const NavBar = props => {
  const {navBarDetails} = props
  const {score, topScore, isGameOver} = navBarDetails
  const navBarText = isGameOver ? 'dont-display' : 'score-container'
  return (
    <div className="nav-bar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      <div className={navBarText}>
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
