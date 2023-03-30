import { About } from "@/components/About";
import { Brand } from "@/components/Brand";
import { Header } from "@/components/Header";
import { HomeFeatureSection } from "./Feature";

export default function Home() {
  return (
    <>
      <Header />
      <HomeFeatureSection />
      <Brand />
      <About />
    </>
  )
}
