import { marked } from 'marked'

export default function MarkdownPage({ markdown }: { markdown: string }) {
  return <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
}