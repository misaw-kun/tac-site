import markdownToHtml from "@/lib/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css";
import { Sources } from "./sources";
import { TableOfContents } from "./table-of-contents";

type Props = {
  content: string;
};

type Source = {
  text: string;
  url: string;
};

export async function PostBody({ content }: Props) {
  // Separate content and sources
  const [mainContent, sourcesSection] = content.split(/## Sources?\s*/i);

  const sources = sourcesSection
    ? sourcesSection
        .trim()
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line) // Filter out empty lines
        .map((line) => {
          const urlMatch = line.match(/\[(.+?)\]\((.+?)\)/);
          return urlMatch
            ? { text: urlMatch[1], url: urlMatch[2] } // Capture text and URL
            : null; // Return null for invalid entries
        })
        .filter((source): source is Source => source !== null)
    : [];

  const mainHtml = await markdownToHtml(mainContent);
  return (
    <div className="max-w-[80ch] mx-auto text-pretty tracking-wide overflow-x-clip">
      <TableOfContents content={mainHtml} />
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: mainHtml }}
      />
      {sources.length > 0 && <Sources sources={sources} />}
    </div>
  );
}
