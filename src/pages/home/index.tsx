import { Brand } from "@/components/Brand";
import { Header } from "@/components/Header";
import { HomeFeatureSection } from "@/components/HomeFeature";
import { Partners } from "@/components/Partners";
import SobreNos from "@/components/gpt/about";

export default function Home() {
  return (
    <>
      <Header />
      <HomeFeatureSection />
      <Brand />
      <SobreNos />
      <Partners />
    </>
  )
}
