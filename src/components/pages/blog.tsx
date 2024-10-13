"use client"

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { IBlog, IComment } from "@/models/Blog";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { FlagIcon, PencilIcon, Share2Icon, TrashIcon, User2Icon } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { addComment } from "@/lib/data";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import Link from "next/link";
import Image from "next/image";
import OnThisPage from "@/components/on-this-page";
import Prism from "prismjs";

import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-jsx.js';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-json.js';
// import 'prismjs/components/prism-cshtml.js';
// import 'prismjs/components/prism-css.js';
// import 'prismjs/components/prism-typescript.js';
// import 'prismjs/components/prism-python';
// import 'prismjs/components/prism-php.js';
// import 'prismjs/components/prism-sql.js';


const BlogPage = ({ blog }: { blog: IBlog }) => {
  
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [comments, setComments] = useState<IComment[]>(blog.comments)
  const [processedHtml, setProcessedHtml] = useState("");
  const date = new Date(blog.date).toDateString();

  const handleMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const postComment = async () => {
    await addComment(name, message, blog.slug)
    setComments([...comments, { name, message, createdAt: new Date() }])
  }

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('Link coppied to clipboard')
    })
  }

  useEffect(() => {
    const buttons = document.querySelectorAll('.copy') as NodeListOf<HTMLButtonElement>;

    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        const id = target.getAttribute('data-code') as string;

        const codeBlock = document.getElementById(id) as HTMLElement;
        const code = codeBlock.innerText;

        navigator.clipboard.writeText(code).then(() => {
          alert('Coppied to clipboard')
          const a = button.innerHTML
          button.innerHTML = '&#10004;'

          setTimeout(() => {
            button.innerHTML = a
          }, 1000);
        })

      })
    })

    Prism.highlightAll()
    processHtml()
  }, [])

  const processHtml = async () => {
    const file = await unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeSlug)
      .use(rehypeStringify)
      .process(blog.content);

    const processedHtmlString = String(file);
    setProcessedHtml(processedHtmlString)
  }




  return (
    <main className="max-w-4xl relative px-10 mt-24 mx-auto flex flex-col justify-between">

      <section className="w-full md:max-w-lg lg:max-w-xl flex flex-col gap-1">

        <div className="flex gap-4 items-center">
          <h1 className="text-4xl font-semibold" id={blog.title}>{blog.title}</h1>
          <Button variant="ghost" size="icon" className="rounded-full" onClick={copyUrl}>
            <Share2Icon className="-ml-0.5" />
          </Button>
        </div>
        <span className="text-sm text-gray-400">{date}</span>
        <p>{blog.description}</p>
        <Image
          src={blog.image}
          alt={blog.title}
          height={384}
          width={500}
          priority
          className="object-cover h-96 my-4 rounded"
        />

        <article
          className="px-2 prose 
           prose-light 
           dark:prose-invert
           prose-pre:relative
           prose-pre:bg-[#1f2937]
           prose-code:px-2
           prose-code:before:content-none
           prose-code:after:content-none
           prose-a:transition
           prose-a:font-normal
           prose-a:text-inherit
           hover:prose-a:text-primary
           prose-hr:my-10
           prose-table:text-lg 
           prose-th:p-3
           prose-td:pl-3"
          dangerouslySetInnerHTML={{ __html: processedHtml }}>
        </article>



        <Link href={blog.link}>
          <Button className="w-fit mt-4">Read more</Button>
        </Link>
      </section>

      <section className="max-w-xl my-8">
        <h2 className="text-2xl font-semibold" id="comments">Comments</h2>

        <div className="flex gap-3 mt-3">
          <span className="bg-gray-500 rounded-full p-3 h-fit"><User2Icon /></span>

          <div className="w-full flex flex-col gap-4 items-end">
            <Input
              value={message}
              onChange={handleMessage}
              className="border-0 border-b-2 border-gray-600 rounded-none w-full focus-visible:ring-0 focus-visible:border-primary"
              placeholder="Write your comment"
            />

            <Dialog>
              <div className="flex gap-4">
                <Button type="reset" variant="ghost">Cancel</Button>
                <DialogTrigger asChild>
                  <Button disabled={message.length < 1}>Comment</Button>
                </DialogTrigger>
              </div>

              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Enter your name</DialogTitle>
                  <DialogDescription>
                    To comment on this blog, please enter you username
                  </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-4 items-center gap-4 py-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input id="username" value={name} onChange={handleName} className="col-span-3" />
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="submit" disabled={name.length < 3} onClick={postComment}>Comment</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>

            </Dialog>

          </div>
        </div>


        <div className="comments flex flex-col gap-4">

          {comments.map(comment => {

            const color = '#' + Math.floor(Math.random() * 66666666).toString(16)

            return (
              <div className="flex items-center gap-3 mt-3" key={comment.createdAt.toString()}>
                <span
                  className="bg-pink-500 w-14 rounded-full text-lg font-bold p-3 text-center"
                  style={{ background: color }}>
                  {comment.name[0]}
                </span>

                <div className="w-full flex flex-col">
                  <span className="text-xs font-semibold">{comment.name}</span>
                  <p>{comment.message}</p>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger className="p-2 h-fit hover:bg-accent rounded-full transition"><DotsVerticalIcon /> </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="flex gap-1"><PencilIcon className="size-4" /> Edit</DropdownMenuItem>
                    <DropdownMenuItem className="flex gap-1"><TrashIcon className="size-4" /> Delete</DropdownMenuItem>
                    <DropdownMenuItem className="flex gap-1"><FlagIcon className="size-4" /> Report</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

              </div>
            )
          })}

        </div>

      </section>

      <aside className="fixed top-20 right-8 lg:right-20 hidden md:block">
        <OnThisPage htmlContent={processedHtml} />
      </aside>
    </main>
  )
}

export default BlogPage
