// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiCardDetails, clickingEmoji} = props
  const {id, EmojiName, emojiUrl} = emojiCardDetails
  const onClickEmoji = () => {
    clickingEmoji(id)
  }
  return (
    <li className="emoji-card-container">
      <button
        className="emoji-button"
        onClick={onClickEmoji}
        type="button"
        testid="button"
      >
        <img src={emojiUrl} alt={EmojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
