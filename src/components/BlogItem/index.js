import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details

  return (
    <li className="list-item">
      <hr className="h-line" />
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <p className="content">{publishedDate}</p>
      </div>
      <p className="content">{description}</p>
    </li>
  )
}
export default BlogItem
