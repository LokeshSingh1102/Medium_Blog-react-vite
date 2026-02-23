import { useParams } from "react-router-dom"
import { getBlogbyId } from "../hooks/Getallblogs"
import { FullBlog } from "../Components/FullBlog"


function Blog() {
  const { id } = useParams()
  const { blog, loading } = getBlogbyId({ id: id || "" })
  console.log(blog)
  if (loading || !blog) {
    return <div>
      Loading...
    </div>
  }
  return (
    <div>
      <FullBlog blog={blog}/>
    </div>
  )
}

export default Blog