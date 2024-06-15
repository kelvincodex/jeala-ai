import {DefaultLayout} from "@/view/layout/DefaultLayout.tsx";
import {HeroSection} from "@/component/section/HeroSection.tsx";
import {PartnershipSection} from "@/component/section/PartnershipSection.tsx";
import {CapabilitiesSection} from "@/component/section/CapabilitiesSection.tsx";
import {UseCaseSection} from "@/component/section/UseCaseSection.tsx";
import {DefaultFooter} from "@/component/footer/DefaultFooter.tsx";
import {FeedbackSection} from "@/component/section/FeedbackSection.tsx";
import {PricingSection} from "@/component/section/PricingSection.tsx";

export const HomePage = () => {
  return(
      <DefaultLayout>
          <HeroSection />
          <PartnershipSection />
          <CapabilitiesSection />
          <UseCaseSection />
          <PricingSection />
          <FeedbackSection />
          <DefaultFooter />
      </DefaultLayout>
  )
}