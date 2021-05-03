import TemplateBase from "@/templates/template-base"
import { SpacerOut } from "@/components/spacer/"
import { default as Hero2021 } from "@/components/pages/2021/hero"
import Hero from "@/components/pages/index/hero"
import Summary from "@/components/summary"
import OurPrograms from "@/components/pages/index/our-programs"
import Testimonial from "@/components/testimonial"
import Mentors from "@/components/pages/quem-somos/mentors"
import NaMidia from "@/components/pages/quem-somos/na-midia"
import Logos from "@/components/logos/"
import cmsData from "@/cms/index.mock"

export default function Index() {
  return (
    <TemplateBase cmsData={cmsData.meta}>
      <SpacerOut marginTop={16} marginTopDesktop={26}>
        <Hero2021 cmsData={cmsData.hero_2021} />
      </SpacerOut>
      <Hero cmsData={cmsData.hero} />
      <OurPrograms cmsData={cmsData.ourPrograms} />
      <Summary />
      <Testimonial />
      {cmsData.content.sections.map((section, index) => {
        switch (section.type) {
          case `logos`:
          default:
            return <Logos key={index} data={section} />
        }
      })}
      <Mentors />
      <NaMidia last={true} />
    </TemplateBase>
  )
}
