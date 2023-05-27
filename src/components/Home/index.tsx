import AboutUs from "./About"
import { BudgetService } from "./BudgetService"
import { HeroSection } from "./HomeFeature"
import { InfoBanner } from "./InfoBanner"
import { Partners } from "./Partners"

export const HomeComponent = () => {
  return (
    <>
      <HeroSection />
      <InfoBanner />
      <AboutUs />
      <Partners />
      <BudgetService />
      
    </>
  )
}