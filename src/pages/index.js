import TemplateBase from "@/templates/template-base"
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
