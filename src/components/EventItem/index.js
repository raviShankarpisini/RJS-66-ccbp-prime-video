// Write your code here

import './index.css'

const EventItem = props => {
  const {eachItem, clickingEvent, isCorrectItem} = props
  const {id, imageUrl, name, location, registrationStatus} = eachItem

  const onClickEvent = () => {
    clickingEvent(registrationStatus, id)
  }

  const clickImageStyle = isCorrectItem ? 'clickTriggered' : ''

  return (
    <li className="item-container">
      <button type="button" onClick={onClickEvent} className={clickImageStyle}>
        <img src={imageUrl} alt="event" className="item-image" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
