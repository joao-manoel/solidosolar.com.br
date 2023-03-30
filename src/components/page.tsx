import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';

type PageProps = {
  children: ReactNode;
  title: string;
  description: string;
  path: string;
}

export function Page({children, path,title, description}: PageProps) {
  const url = `https://solidosolar.vercel.app/${path}`
  return (
    <>
      <NextSeo 
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url, title
        }}
      />
      
      {children}
    </>
  );
}