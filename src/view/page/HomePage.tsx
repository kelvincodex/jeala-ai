import {HeroSection} from "@/component/section/HeroSection.tsx";
import {PartnershipSection} from "@/component/section/PartnershipSection.tsx";
import {CapabilitiesSection} from "@/component/section/CapabilitiesSection.tsx";
import {UseCaseSection} from "@/component/section/UseCaseSection.tsx";
import {FeedbackSection} from "@/component/section/FeedbackSection.tsx";
import {PricingSection} from "@/component/section/PricingSection.tsx";
import {FAQSection} from "@/component/section/FAQSection.tsx";
import {WaitlistSection} from "@/component/section/WaitlistSection.tsx";
import {PageLayout} from "@/view/layout/PageLayout.tsx";

export const HomePage = () => {


  return(
      <PageLayout>
          <HeroSection />
          <PartnershipSection />
          <CapabilitiesSection />
          <UseCaseSection />
          <PricingSection />
          <FeedbackSection />
          <WaitlistSection />
          <FAQSection />
      </PageLayout>
  )
}