// Write your code here

import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  switch (registrationStatus) {
    case 'INITIAL':
      return (
        <div className="active-event-container">
          <p className="heading">
            Click on an event, to view its registration details
          </p>
        </div>
      )
    case 'YET_TO_REGISTER':
      return (
        <div className="active-event-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
              alt="yet to register"
              className="result-image"
            />
          </div>

          <p className="description">
            A live performance brings so much to your relationship with dance.
            Seeing dance live can often make you fall totally in love with this
            beautiful art from.
          </p>
          <button type="button" className="registration-button">
            Register Here
          </button>
        </div>
      )
    case 'REGISTERED':
      return (
        <div className="active-event-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
              alt="registered"
              className="already-done-image"
            />
          </div>

          <h1 className="already-registered">
            You have already registered for the event
          </h1>
        </div>
      )
    case 'REGISTRATIONS_CLOSED':
      return (
        <div className="active-event-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
              alt="registrations closed"
              className="result-image"
            />
          </div>

          <h1 className="already-registered">Registrations Are Closed Now!</h1>
          <p className="description">Stay tuned. We will reopen</p>
        </div>
      )
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
