import './index.css'

const EmojiCard = props => {
  const {emojiCar, emojiClick} = props
  const {id, emojiName, emojiUrl} = emojiCar
  const changeEmoji = () => {
    emojiClick(id)
  }

  return (
    <li className="emoji-container" onClick={changeEmoji}>
      <img src={emojiUrl} className="emoji" alt={emojiName} />
    </li>
  )
}

export default EmojiCard
