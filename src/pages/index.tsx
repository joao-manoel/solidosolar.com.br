import { ButtonWhatsapp } from "@/components/ButtonWhatsapp";
import { Page } from "@/components/page";
import Home from "./home";

export default function Index() {
  return (
    <Page title="Sólido Solar - Energia Sustentável" description='Uma empressa 100% Matogrossense focada em gerar energia limpa e sustentável' path="/">
      <main className="w-full relative">
        <Home />
        <ButtonWhatsapp />
      </main>
    </Page>
  )
}
