import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

export async function markdownToHtml(markdown: string): Promise<string> {
  const processed = await remark().use(gfm).use(html).process(markdown);

  return processed.toString();
}
