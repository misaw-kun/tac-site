import { remark } from "remark";
import html from "remark-html";
import { visit } from "unist-util-visit";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(() => (tree) => {
      // Visit each heading node
      visit(tree, "heading", (node: any) => {
        // Create an ID based on the text content
        const id = node.children
          .map((child: any) => child.value)
          .join("-")
          .toLowerCase()
          .replace(/[^\w]+/g, "");
        node.data = {
          hProperties: {
            id: id, // Set the ID as a property
          },
        };
      });
    })
    .use(html)
    .process(markdown);
  return result.toString();
}
