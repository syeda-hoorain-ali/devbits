import BlogCard from "@/components/blog-card"
import { getBlogs } from "@/lib/data"
// import { blogs } from "@/lib/local"

const page = async () => {
  
  const blogs = await getBlogs()

  return (
    <main className='my-8 mt-20'>
      <h1 className="text-4xl text-center underline decoration-primary underline-offset-8 mb-8">Blogs</h1>
      <div className='w-fit flex justify-center flex-wrap gap-4'>
        {blogs.map(blog => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </main>
  )
}

export default page
