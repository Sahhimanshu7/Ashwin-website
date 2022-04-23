import React from 'react'

function BlogsSection() {
  return (
    <div>
        <button onClick={
         () => {
            window.location.href = '/Admin/CreateBlog';
         } 
        }>Create a new blog</button>
        <button onClick={
          () => {
            window.location.href = '/Admin/AdminPage';
          }
        }>Edit a blog</button>
    </div>
  )
}

export default BlogsSection