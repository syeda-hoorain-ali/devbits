"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const OnThisPage = ({ htmlContent }: { htmlContent: string }) => {

  const [headings, setHeadings] = useState<{ text: string, id: string }[]>([])


  useEffect(() => {

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;

    const h1 = document.querySelector('h1') as HTMLHeadingElement;
    const h2s = tempDiv.querySelectorAll('h2') as NodeListOf<HTMLHeadingElement>;

    const links = Array.from(h2s).map(h2 => ({
      id: h2.id,
      text: h2.textContent || ''
    }))

    setHeadings([
      { id: h1.id, text: h1.textContent || '' },
      ...links,
      { id: 'comments', text: 'Comments' },
    ])


  }, [htmlContent])


  return (<>
    <h2 className="text-xl font-semibold">On this page</h2>
    <ul className="p-1 max-w-56 flex flex-col gap-1.5">
      {headings.map(heading => (
        <li key={heading.id}>
          <Link href={`#${heading.id}`} className="hover:text-primary">{heading.text}</Link>
        </li>
      ))}
    </ul>
  </>)
}

export default OnThisPage
