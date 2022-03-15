import {Component} from 'react'
import './index.css'
import ClipLoader from 'react-spinners/ClipLoader'
import Navbar from '../Navbar'

class Home extends Component {
  state = {
    error: false,
    blogData: [],
    isFileChosen: false,
    isLoading: false,
    successMsg: false,
    failureMsg: false,
  }

  handleChange = event => {
    console.log('issues')
  }

  sendJsonBlogData = async () => {
    this.setState({isLoading: true, successMsg: false, failureMsg: false})
    const {blogData} = this.state
    const stBlogData = JSON.stringify(blogData)
    const options = {
      method: 'POST',
      body: stBlogData,
      headers: {
        'Content-type': 'application/json',
      },
    }
    const response = await fetch(
      'https://sai-nodejs-finance.herokuapp.com/saveblogs/',
      options,
    )
    if (response.ok === true) {
      this.setState({isLoading: false, successMsg: true, failureMsg: false})
    } else {
      this.setState({isLoading: false, successMsg: false, failureMsg: true})
    }

    console.log(response)
    console.log('received')
  }

  render() {
    const {error, isFileChosen, isLoading, successMsg, failureMsg} = this.state
    console.log('Blog ')
    return (
      <>
        <Navbar />
        <div className="bg-home-container">
          <div className="home-section-main-container">
            <h1>Add File</h1>
            <input type="file" onChange={() => console.log('heyyy')} />
            <br />
            {error && (
              <p className="error-home">please choose the correct json file</p>
            )}
            {successMsg && (
              <p className="error-success">Submitted successfully</p>
            )}
            {failureMsg && (
              <p className="error-home">Not Submitted Try Again</p>
            )}
            {isFileChosen && (
              <button
                type="button"
                className="home-submit-button"
                onClick={this.sendJsonBlogData}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ClipLoader color="#000000" size={20} />
                ) : (
                  'Submit'
                )}
              </button>
            )}
          </div>
        </div>
      </>
    )
  }
}
export default Home
