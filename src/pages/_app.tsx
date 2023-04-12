import '@/styles/globals.css';
import 'animate.css';

import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import { WidgetsWhatsapp } from '@/components/WidgetsWhatsapp';
import SEO_DEFAULT from "@/utils/next-seo-config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO_DEFAULT}/>
      <Component {...pageProps} />
      <WidgetsWhatsapp />
    </>
  )
}
