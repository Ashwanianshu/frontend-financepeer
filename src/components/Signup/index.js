import {Component} from 'react'
import './index.css'

import {Link} from 'react-router-dom'

class Signup extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    location: '',
    gender: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeLocation = event => {
    this.setState({location: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="login-page-input-label" htmlFor="password">
          Password*
        </label>
        <input
          type="password"
          id="password"
          className="login-page-password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="login-page-input-label" htmlFor="username">
          Username*
        </label>
        <input
          type="text"
          id="username"
          className="login-page-password-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  renderLocationField = () => {
    const {location} = this.state

    return (
      <>
        <label className="login-page-input-label" htmlFor="location">
          Location*
        </label>
        <input
          type="text"
          id="location"
          className="login-page-password-input-field"
          value={location}
          onChange={this.onChangeLocation}
          placeholder="Location"
        />
      </>
    )
  }

  onChangeGender = event => {
    this.setState({
      gender: event.target.value,
    })
  }

  renderGenderField = () => (
    <select className="select-class" onChange={this.onChangeGender}>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>
  )

  onSubmitSuccessForm = msg => {
    this.setState({showSubmitError: true, errorMsg: msg})
  }

  onSubmitFailureForm = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password, location, gender} = this.state
    const url = 'https://financepeer-assignment.herokuapp.com/signup/'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password, gender, location}),
      headers: {
        'Content-type': 'application/json',
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccessForm('User is created')
    } else {
      this.onSubmitFailureForm(data.error)
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    console.log('sign up')
    return (
      <div className="login-page-bg-container">
        <div className="login-page-form-container">
          <form className="signup-form-container" onSubmit={this.onSubmitForm}>
            <div className="login-form-logo-container">
              <img
                src="https://www.financepeer.com/static/img_tmp/favicon2.png"
                alt="login website logo"
                className="login-page-bookhub-logo"
              />
            </div>
            <div className="login-page-input-container">
              {this.renderUsernameField()}
            </div>
            <div className="login-page-input-container">
              {this.renderPasswordField()}
            </div>
            <div className="login-page-input-container">
              {this.renderLocationField()}
            </div>
            <div className="login-page-input-container">
              {this.renderGenderField()}
            </div>
            <button type="submit" className="login-form-login-button">
              Signup
            </button>
            {showSubmitError && <p className="error-msg">{errorMsg}</p>}
            <button type="button" className="sign-up-button">
              <Link className="link-sign-up" to="/login">
                Login
              </Link>
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default Signup
