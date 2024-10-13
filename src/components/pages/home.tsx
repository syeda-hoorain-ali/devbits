'use client'

import BlogCard from '@/components/blog-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Animate from '@/components/animate'
import Link from 'next/link'
import { IBlog } from '@/models/Blog'

interface Props {
  blogs: IBlog[]
}

const HomePage = ({ blogs }: Props) => {
  return (
    <main className='p-5 min-h-screen mt-16'>

      {/* Hero Section */}
      <section className='container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center'>
        <div className='w-full text-center lg:text-left lg:w-1/2 lg:-mt-8'>

          <Animate animation='left' tagName='h1'
            className='text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl'>
            Best Programming Blogs to Master Your Coding Skills
          </Animate>

          <Animate
            className='mt-4 text-lg text-gray-500 dark:text-gray-300'
            animation='left'
            tagName='p'>
            A platform offering in-depth tutorials, articles, and guides on web development. Enhance your coding skills with practical insights.
          </Animate>


          <Animate animation='bottom' tagName='div'
            className='mt-6 border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring-1 ring-primary ring-opacity-10'>
            <form className='flex flex-wrap items-center justify-between md:flex-row'>
              <Input type='search' name='query' placeholder='Search Blogs' required className='flex-1 h-10 px-4 m-1 border-none appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0' />
              <Button type='submit' className='size-10 mr-1' size='icon'>
                <Search className='size-5' />
              </Button>
            </form>
          </Animate>
        </div>

        <Animate className='w-full mt-4 lg:mt-0 lg:w-1/2' animation='right' tagName='div'>
          <Image
            src='/images/hero-image.png'
            alt='DevBits'
            width={1400}
            height={1400}
            className='w-full h-full max-w-md mx-auto' />
        </Animate>
      </section>

      {/* Featured Blogs Section */}
      <section className='flex flex-col items-center justify-center py-8 gap-8'>
        <Animate tagName='h2' animation='fadeIn' className='text-2xl font-bold text-gray-800 dark:text-gray-200'>
          Our Blogs
        </Animate>
        <div className='w-fit flex justify-center flex-wrap md:flex-nowrap gap-4'>
          {blogs.map(blog => (
            <Animate tagName='div' animation='bottom' key={blog.slug}>
              <BlogCard key={blog.slug} blog={blog} />
            </Animate>
          ))}
        </div>
        <Animate tagName='div' animation='bottom'>
          <Link href='/blogs'><Button>More Blogs</Button></Link>
        </Animate>
      </section>

      {/* Get Started Section */}
      <section className='min-h-96 bg-[url("/images/programing.jpg")] bg-cover rounded'>
        <div className='min-h-96 bg-gradient flex flex-col gap-4 items-center justify-center'>

          <Animate tagName='h2' animation='fadeIn' className='text-2xl font-bold text-white'>
            Start You Web Development Journey
          </Animate>

          <Animate tagName='p' animation='fadeIn' className='text-lg text-gray-200' delay={1}>
            Dive into hundreds of resources, tutorials and open-source projects to kickstart your career
          </Animate>

          <Animate tagName='div' animation='zoomIn'>
            <Link href='/blogs'><Button size='lg'>Get Started Now</Button></Link>
          </Animate>
        </div>
      </section>

      {/* Achive Your Goals */}
      <section className='py-16 bg-image flex flex-col items-center justify-center gap-8'>

        <Animate tagName='h2' animation='top' className='text-2xl font-bold'>
          Achive Goals
        </Animate>

        <Animate tagName='div' animation='fadeIn'>
          <Image className='hidden dark:block' src='/images/goals-dark.png' alt='' width={1200} height={500} />
          <Image className='block dark:hidden' src='/images/goals-light.png' alt='' width={1200} height={500} />
        </Animate>
      </section>

    </main >
  )
}

export default HomePage
