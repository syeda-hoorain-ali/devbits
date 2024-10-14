"use client";

import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { GlobeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#252322] bg-opacity-70 py-2 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex items-center flex-col sm:flex-row">
          <div>
            <Image className="hidden dark:block" src='/images/logo-dark.png' alt='Devbits' height={50} width={150} />
            <Image className="block dark:hidden" src='/images/logo-light.png' alt='Devbits' height={50} width={150} />
          </div>
          <p className="text-sm mt-2">
            &copy; {new Date().getFullYear()} DevBits. All rights reserved.
          </p>
        </div>


        <ul className="flex gap-4 mt-4 md:mt-0">
          <li>
            <Link className="hover:text-primary transition" target="_blank" href='https://github.com/syeda-hoorain-ali/'>
              <GitHubLogoIcon className="size-6" />
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary transition" target="_blank" href='https://www.linkedin.com/in/syedahoorainali/'>
              <LinkedInLogoIcon className="size-6" />
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary transition" target="_blank" href='https://twitter.com/'>
              <TwitterLogoIcon className="size-6" />
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary transition" target="_blank" href='https://syeda-hoorain-ali.vercel.app/'>
              <GlobeIcon className="size-6" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
