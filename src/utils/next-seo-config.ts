const title = 'Sólido Solar - energia sustentável'
const description = 'Uma empressa 100% Matogrossense focada em gerar energia limpa e sustentável.'

const SEO = {
  title, 
  description,
  canonical: 'https://solidosolar.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'pt_Br',
    url: 'https://solidosolar.vercel.app',
    title,
    description,
    images: [
      {
        url: 'https://solidosolar.vercel.app/images/og.png',
        alt: title,
        width: 500,
        height: 500
      }
    ]
  }
}

export default SEO