import BlogPage from "@/components/pages/blog";
import { notFound } from "next/navigation";
import { getBlog } from "@/lib/data";
// import { getBlog } from "@/lib/local";

interface Props {
  params: {
    slug: string
  }
}

const page = async ({ params }: Props) => {

  const blog = await getBlog(params.slug);
  // const blog = getBlog(params.slug);
  if (!blog) return notFound();
  
  return (
    <BlogPage blog={blog} />
  )
}

export default page
