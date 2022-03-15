import {Component} from 'react'
import Cookies from 'js-cookie'
import Navbar from '../Navbar'
import BlogElements from '../BlogElements'
import './index.css'

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
    console.log(response)
    const data = await response.json()
    if (response.ok === true) {
      this.setState({blogData: data, isLoading: false})
    } else {
      console.log('asjhdgahjdgahgdhjasgdhjasgdhjag')
    }
  }

  render() {
    const {blogData, isLoading} = this.state
    console.log('Blog ')
    return (
      <>
        <Navbar />
        <div className="bg-blogs-container">
          <ul className="blogs-ul-container">
            {isLoading ? (
              <h1>dsfhkjsdhfdjsfs</h1>
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
