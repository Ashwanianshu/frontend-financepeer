import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './index.css'

class Navbar extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  renderNavLoginItems = () => (
    <ul className="navbar-nav ms-auto ">
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">
          Sign up
        </Link>
      </li>
      <li className="nav-item">
        <button
          type="button"
          className="button-logout"
          onClick={this.onClickLogout}
        >
          Logout
        </button>
      </li>
    </ul>
  )

  render() {
    console.log('navbar')
    return (
      <nav className="navbar navbar-expand navbar-light">
        <div className="container">
          <Link className="navbar-brand " to="/blogs">
            <img
              src="https://www.financepeer.com/static/img_tmp/favicon2.png"
              className="currency-logo"
              alt="currency logo"
            />
          </Link>
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <Link to="/blogs" className="navbar-brand">
            Blogs
          </Link>
          <div className="collapse navbar-collapse">
            {this.renderNavLoginItems()}
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
