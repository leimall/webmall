import { getDocumentFromTitle } from "@/apis/document";
import type { documentType } from "@/types/document";
import '@/styles/github-markdown.css';


export function generateStaticParams() {
  let list: {title: string}[] = []
  const titles = ['terms','privacy','about'];
  return titles.map(title => ({ title }));
}

export default async function Page({ params }: { params: { title: string } }) {
  // const { title } = params;
  // const res = await getDocumentFromTitle({ title });
  // console.log(res);

  // const data: documentType | null = res.data;


  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      {/* <h1>{data.Title}</h1>
      <div className="markdown-body" dangerouslySetInnerHTML={{ __html: data.Content }} /> */}
    </>
  );
}

