import { getDocumentFromTitle } from "@/apis/document";
import type { documentType } from "@/types/document";

import MarkdownPage from '@/components/Common/md';

export function generateStaticParams() {
  // let list: {title: string}[] = []
  const titles = ['terms', 'privacy', 'about', 'contact', 'faq',  'shipping', 'return', 'payment'];
  return titles.map(title => ({ title }));
}

export default async function Page({ params }: { params: { title: string } }) {
  try {
    const res = await getDocumentFromTitle(params);
    const data: documentType | null = res.data;

    if (!data) {
      return <div>Document not found</div>;
    }

    return (
      <div className="relative mx-auto max-w-c-1280 py-5 items-center justify-between align-items:flex-end px-4 md:px-8 2xl:px-0">
        <h1 className="text-2xl md:text-4xl font-bold text-center p-4 mb-4 ">{data.Title}</h1>
        <MarkdownPage markdown={ data.Content} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching document:', error);
    return <div>Error loading document</div>;
  }
}
