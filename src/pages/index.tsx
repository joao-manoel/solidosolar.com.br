import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import AboutUs from "@/components/Home/About";
import { HeroSection } from "@/components/Home/HomeFeature";
import { InfoBanner } from "@/components/Home/InfoBanner";
import { Partners } from "@/components/Home/Partners";
import { WidgetsWhatsapp } from "@/components/WidgetsWhatsapp";
import { Page } from "@/components/page";

export default function Index() {
  return (
    <Page title="Sólido Solar - Energia Sustentável" description='Uma empressa 100% Matogrossense focada em gerar energia limpa e sustentável' path="/">
      <main className="w-full relative">
        <Header />
        <HeroSection />
        <InfoBanner />
        <AboutUs />
        <Partners />
        <WidgetsWhatsapp />
        <Footer />
      </main>
    </Page>
  )
}
