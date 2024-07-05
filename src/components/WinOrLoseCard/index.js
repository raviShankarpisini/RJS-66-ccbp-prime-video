// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain, list} = props
  //   const {score} = winOrLossDetails
  const headingText = score === list.length ? 'You Won' : 'You Lose'
  const onClickPlayAgain = () => {
    playAgain()
  }

  const url =
    score === list.length
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const scoreTitle = score === list.length ? 'Best Score' : 'Score'
  return (
    <div className="win-loss-container">
      <div className="text-container">
        <h1 className="win-loss-heading">{headingText}</h1>
        <p className="score-title">{scoreTitle}</p>
        <p className="score-style">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>

      <img className="win-loss-image" src={url} alt="win or loss" />
    </div>
  )
}
export default WinOrLoseCard
