import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import ClipLoader from 'react-spinners/ClipLoader'
import BlogElements from '../BlogElements'
import Navbar from '../Navbar'

class BlogsData extends Component {
  state = {
    blogData: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    this.setState({
      isLoading: true,
    })
    const apiUrl = `https://financepeer-assignment.herokuapp.com/blog/`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    this.setState({blogData: data, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    console.log(blogData)
    return (
      <>
        <Navbar />
        <div className="bg-blogs-container">
          <ul className="blogs-ul-container">
            {isLoading ? (
              <ClipLoader color="#000000" size={50} />
            ) : (
              blogData.map(eachBlog => (
                <BlogElements itemData={eachBlog} key={eachBlog.id} />
              ))
            )}
          </ul>
        </div>
      </>
    )
  }
}
export default BlogsData
