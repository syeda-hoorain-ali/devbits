"use client";

import Link from "next/link"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white bg-opacity-10 backdrop-blur-3xl">
      <div className="flex items-center justify-between px-8 md:px-10 py-3">

        <div className="text-white">
          <Image className="hidden dark:block" src='/images/logo-dark.png' alt='Devbits' height={50} width={150} />
          <Image className="block dark:hidden" src='/images/logo-light.png' alt='Devbits' height={50} width={150} />
        </div>

        <div className="hidden md:flex gap-5">
          <ul className="flex items-center">
            <li><Link href="/"><Button variant="link" size="md">Home</Button></Link></li>
            <li><Link href="/blogs"><Button variant="link" size="md">Blogs</Button></Link></li>
            <li><Link href="/about"><Button variant="link" size="md">About</Button></Link></li>
            <li><Link href="/contact"><Button variant="link" size="md">Contact</Button></Link></li>
          </ul>

          <ModeToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon"><MenuIcon /></Button>
            </SheetTrigger>

            <SheetContent className="w-1/3 min-w-60">
              <ul className="flex gap-2 my-12 flex-col">
                <li><Link href="/"><Button variant="link" size="md">Home</Button></Link></li>
                <li><Link href="/blogs"><Button variant="link" size="md">Blogs</Button></Link></li>
                <li><Link href="/about"><Button variant="link" size="md">About</Button></Link></li>
                <li><Link href="/contact"><Button variant="link" size="md">Contact</Button></Link></li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
