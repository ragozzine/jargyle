import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  return rss({
    title: 'jargyle | articles',
    description: 'Articles written by John A. Ragozzine',
    site: context.site,
    trailingSlash: false,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}