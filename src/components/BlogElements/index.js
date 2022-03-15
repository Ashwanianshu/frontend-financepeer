import './index.css'

const BlogElements = props => {
  const {itemData} = props
  const {title, body, id} = itemData
  console.log('Blog Elements')
  return (
    <li className="blog-elements-container">
      <div className="blog-item-header">
        <p className="blog-item-title">{title}</p>
        <p className="blog-item-user-id">{id}</p>
      </div>
      <p className="blog-item-body">{body}</p>
    </li>
  )
}
export default BlogElements
