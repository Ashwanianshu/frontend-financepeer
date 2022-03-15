// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <>
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dq8h4f4kb/image/upload/v1643963052/MiniProject/Group_7484Page_nort_found_pic_dk1zu6.png"
        alt="not found"
        className="not-found-container-small-pic"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-content">
        we are sorry, the page you requested could not be found,Please go back
        to the homepage.
      </p>
      <button type="button" className="not-found-button">
        <Link className="not-found-link" to="/">
          Go Back to Home
        </Link>
      </button>
    </div>
  </>
)
export default NotFound
