import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsData} = props

  return (
    <ul className="blog-list">
      {blogsData.map(eachBlog => (
        <BlogItem key={eachBlog.id} details={eachBlog} />
      ))}
    </ul>
  )
}
export default BlogList
