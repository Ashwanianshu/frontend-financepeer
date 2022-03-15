import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
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

  onSubmitSuccessForm = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailureForm = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://financepeer-assignment.herokuapp.com/login/'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'Content-type': 'application/json',
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccessForm(data.jwtToken)
    } else {
      this.onSubmitFailureForm(data.error)
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    console.log('login')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <>
        <div className="login-page-bg-container">
          <div className="login-page-form-container">
            <form className="login-form-container" onSubmit={this.onSubmitForm}>
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
              <button type="submit" className="login-form-login-button">
                Login
              </button>
              {showSubmitError && <p className="error-msg">{errorMsg}</p>}
              <button type="button" className="sign-up-button">
                <Link className="link-sign-up" to="/signup">
                  Sign Up
                </Link>
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }
}
export default Login
