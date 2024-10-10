import { marked } from 'marked'
import '@/styles/github-markdown.css';

export default function MarkdownPage({ markdown }: { markdown: string }) {
  return <div  className="markdown-body" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
}