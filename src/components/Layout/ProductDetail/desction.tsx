"use client"
import MarkdownPage from '@/components/Common/md';
import type { Detail } from '@/types/products';


export default function Description({ detail }: { detail: Detail }) {
  return (
    <div className="mt-8">
      <ul className="flex border-b">
        <li
          className="text-gray-800 font-bold text-sm bg-gray-100 py-3 px-8 border-b-2 border-gray-800 transition-all">
          Description</li>
      </ul>
      <div className="mt-4">
        <MarkdownPage markdown={detail.content} />
      </div>
    </div>
  )
}