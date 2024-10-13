"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface Props {
  blog: {
    title: string;
    description: string;
    image: string;
    slug: string;
  }
}

const BlogCard = ({ blog }: Props) => {

  const background = {
    background: `url(${blog.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  return (
    <Card className="max-w-72 md:max-w-96 hover:scale-105 transition-all">
      <CardHeader>
        <Link href={`/blog/${blog.slug}`} className="h-44 bg-primary rounded" style={background}>
          {/* <Image className="rounded object-cover bg-center" src={blog.image} height={176} width={400} alt="" /> */}
        </Link>
      </CardHeader>

      <CardContent className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold">{blog.title}</h3>
        <p className="text-sm text-gray-500 leading-snug mb-2">{blog.description}</p>
        <Link href={`/blog/${blog.slug}`} className="max-w-min">
          <Button>Read More</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export default BlogCard
