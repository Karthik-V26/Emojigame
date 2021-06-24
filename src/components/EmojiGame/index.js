/* 
Quick Tip 
 
- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.
 
const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}
 
*/

import './index.css'
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    winStatus: false,
    selectedId: [],
    gameStatus: false,
  }

  emojiClick = id => {
    const {score, selectedId} = this.state
    if (selectedId.includes(id) === false && score + 1 <= 12) {
      const currentArray = [...selectedId, id]
      if (score + 1 === 12) {
        this.setState({
          score: score + 1,
          topScore: 12,
          winStatus: true,
          gameStatus: true,
        })
      } else {
        this.setState({
          score: score + 1,
          winStatus: false,
          gameStatus: false,
          selectedId: currentArray,
        })
      }
    } else {
      this.setState({winStatus: true, gameStatus: false})
    }
  }

  changeReset = () => {
    const {score, topScore} = this.state
    const currentTopScore = score > topScore ? score : topScore
    this.setState({
      score: 0,
      winStatus: false,
      gameStatus: false,
      topScore: currentTopScore,
      selectedId: [],
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  displayPage = () => {
    const {score, winStatus, gameStatus} = this.state
    const emojisList = this.shuffledEmojisList()
    const val = winStatus ? (
      <WinOrLoseCard
        gameStatus={gameStatus}
        score={score}
        changeReset={this.changeReset}
      />
    ) : (
      <ul className="emojis-ul">
        {emojisList.map(each => (
          <EmojiCard
            emojiCar={each}
            emojiClick={this.emojiClick}
            key={each.id}
          />
        ))}
      </ul>
    )
    return val
  }

  render() {
    const {score, topScore, winStatus} = this.state
    return (
      <div className="game-container">
        <NavBar score={score} maxScore={topScore} winStatus={winStatus} />
        {this.displayPage()}
      </div>
    )
  }
}

export default EmojiGame
