"use client";
import { useEffect, useState } from "react";

type Heading = {
  text: string;
  id: string;
  level: number;
};

type TableOfContentsProps = {
  content: string;
};

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const headingElements = doc.querySelectorAll("h2");
    const headingList = Array.from(headingElements).map((heading) => ({
      id: heading.id,
      text: heading.textContent || "",
      level: parseInt(heading.tagName.replace("H", ""), 10),
    }));
    setHeadings(headingList);
  }, [content]);

  return (
    <nav className="toc w-fit">
      <h2 className="mb-5 text-3xl">Table Of Contents</h2>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className={`ml-${(heading.level - 2) * 4}`}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
