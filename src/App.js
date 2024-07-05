import {Component} from 'react'
import {v4 as uuid} from 'uuid'

import './App.css'

const colors = [
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
]

const NoPassword = () => (
  <div className="no-password-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
      alt="no passwords"
      className="no-passwords-image"
    />
    <p className="no-password-text">No Passwords</p>
  </div>
)

const PasswordElement = props => {
  const {eachItem, deleteListItem, isPasswordsVisible} = props
  const {id, usernameInput, passwordInput, websiteInput, randomColor} = eachItem

  const deleteItem = () => {
    deleteListItem(id)
  }

  const password = isPasswordsVisible ? (
    <p>{passwordInput}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )

  return (
    <li className="delete-card">
      <div className="sub-card">
        <div className={`user-logo ${randomColor}`}>
          <p>{usernameInput[0]}</p>
        </div>
        <div className="text-container">
          <p className="websiteName">{websiteInput}</p>
          <p className="websiteName">{usernameInput}</p>
          {password}
        </div>
      </div>

      <button
        className="delete-button"
        testid="delete"
        type="button"
        onClick={deleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

class App extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordsList: [],
    searchInput: '',
    isPasswordsVisible: false,
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  addPassword = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const newPassword = {
      id: uuid(),
      websiteInput,
      passwordInput,
      usernameInput,
      randomColor: colors[Math.floor(Math.random() * colors.length)],
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      websiteInput: '',
      passwordInput: '',
      usernameInput: '',
    }))
  }

  deleteListItem = id => {
    const {passwordsList} = this.state
    const listAfterDelete = passwordsList.filter(eachList => eachList.id !== id)
    this.setState({
      passwordsList: listAfterDelete,
    })
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickViewHidePassword = () => {
    this.setState(prevState => ({
      isPasswordsVisible: !prevState.isPasswordsVisible,
    }))
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      passwordsList,
      searchInput,
      isPasswordsVisible,
    } = this.state
    const finalList = passwordsList.filter(eachItem =>
      eachItem.websiteInput.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const count = finalList.length

    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="logo-container">
            <img
              className="app-logo"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
            />
          </div>
          <div className="inputs-container">
            <div className="form-container">
              <form onSubmit={this.addPassword}>
                <h1 className="form-heading">Add New Password</h1>
                <div className="input-container">
                  <div className="icon">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="icon-style"
                    />
                  </div>
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Website"
                    onChange={this.onChangeWebsite}
                    value={websiteInput}
                  />
                </div>
                <div className="input-container">
                  <div className="icon">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                      className="icon-style"
                    />
                  </div>
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Username"
                    onChange={this.onChangeUsername}
                    value={usernameInput}
                  />
                </div>
                <div className="input-container">
                  <div className="icon">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                      className="icon-style"
                    />
                  </div>
                  <input
                    className="input"
                    type="password"
                    placeholder="Enter Password"
                    onChange={this.onChangePassword}
                    value={passwordInput}
                  />
                </div>
                <div className="add-button-container">
                  <button type="submit" className="add-button">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              className="password-manager-image large-view"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
            <img
              className="password-manager-image medium-view"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
          </div>
          <div className="passwords-container">
            <div className="title-and-search-container">
              <div className="title-container">
                <h1 className="password-heading">Your Passwords</h1>
                <p className="count">{count}</p>
              </div>
              <div className="search-container">
                <div className="search-logo">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="search-image"
                  />
                </div>
                <input
                  className="search-input"
                  type="search"
                  placeholder="search"
                  onChange={this.onChangeSearch}
                />
              </div>
            </div>
            <hr />
            <div className="checkBox-container">
              <input
                type="checkbox"
                id="checkBox"
                onClick={this.onClickViewHidePassword}
              />
              <label className="checkBox-text" htmlFor="checkBox">
                Show Passwords
              </label>
            </div>
            <div className="passwords-cards-container">
              {count !== 0 ? (
                <ul className="delete-container">
                  {finalList.map(eachItem => (
                    <PasswordElement
                      eachItem={eachItem}
                      key={eachItem.id}
                      deleteListItem={this.deleteListItem}
                      isPasswordsVisible={isPasswordsVisible}
                    />
                  ))}
                </ul>
              ) : (
                <NoPassword />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
