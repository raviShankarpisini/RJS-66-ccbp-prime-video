/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}
*/

// Write your code here.

// everything and output is correct,but test cases are failing

import {Component} from 'react'
import './index.css'
import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, isGameOver: false, idsList: []}

  clickingEmoji = id => {
    const {idsList, score} = this.state
    if (idsList.includes(id)) {
      this.setState({isGameOver: true, score})
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        idsList: [...prevState.idsList, id],
      }))
      if (score === idsList.length - 1) {
        this.setState({isGameOver: true})
      }
    }
  }

  playAgain = () => {
    const {score, topScore} = this.state
    // if (score > topScore) {
    //   this.setState({topScore: score})
    // }
    this.setState({topScore: Math.max(score, topScore)})
    this.setState({isGameOver: false, score: 0, idsList: []})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  winOrLoss = () => {
    const {score} = this.state
    const newShuffledList = this.shuffledEmojisList()
    return (
      <WinOrLossCard
        score={score}
        playAgain={this.playAgain}
        list={newShuffledList}
      />
    )
  }

  gameRunningCard = () => {
    const newShuffledList = this.shuffledEmojisList()
    return (
      <ul className="ul">
        {newShuffledList.map(eachEmoji => (
          <EmojiCard
            emojiCardDetails={eachEmoji}
            clickingEmoji={this.clickingEmoji}
            key={eachEmoji.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, topScore, isGameOver} = this.state
    // const {emojisList} = this.props
    return (
      <div className="app-container">
        <Navbar navBarDetails={{score, topScore, isGameOver}} />
        <div className="card-container">
          {isGameOver ? this.winOrLoss() : this.gameRunningCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
