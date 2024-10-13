import { getBlogs } from '@/lib/data'
// import { blogs } from '@/lib/local'
import HomePage from '@/components/pages/home'

const page = async () => {
  const myblogs = (await getBlogs()).slice(0, 3);
  // const myblogs = blogs.slice(0, 3);
  return <HomePage blogs={myblogs} /> ;
}

export default page
