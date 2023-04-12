import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeComponent } from "@/components/Home";
import { Page } from "@/components/page";

export default function Index() {
  return (
    <Page title="Sólido Solar - Energia Sustentável" description='Uma empressa 100% Matogrossense focada em gerar energia limpa e sustentável' path="/">
      <main className="w-full relative">
        <Header />
        <HomeComponent />
        <Footer />
      </main>
    </Page>
  )
}
