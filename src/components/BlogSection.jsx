import React from 'react'
import BlogCard from './BlogCard'

const data=[
  {
    img:"/post__1.webp",
    title:"Healthy Food Healthy Life",
    date:"Aug 27 2023",
    comment:8,
  },
  {
    img:"/post__2.webp",
    title:"Healthy Food Healthy Life",
    date:"Aug 25 2023",
    comment:1,
  },
  {
    img:"/post__3.webp",
    title:"Healthy Food Healthy Life",
    date:"Aug 30 2023",
    comment:6,
  },

]

const BlogSection = () => {
  return (
    <div className='container pt-16'>
      <h2 className='font-bold text-2xl'>Latest News</h2>
      <p className='text-gray-500'>
        Present posts in a best way to Highlight interesting moments of Your Blog.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {
          data.map((e)=>(
            <BlogCard key={e.date} img={e.img} title={e.title} date={e.date} comment={e.comment}/>
          ))
        }
      </div>
    </div>
  )
}

export default BlogSection