import cmsData from "@/cms/portfolio.mock"
import TemplateBase from "@/templates/template-base"
import Hero from "@/components/pages/portfolio/hero"
import CurrentClass from "@/components/pages/portfolio/current-class"
import Logos from "@/components/logos/"
import { SpacerOut } from "@/components/spacer"

export default function Portfolio() {
  return (
    <TemplateBase cmsData={cmsData.meta}>
      <Hero cmsData={cmsData.hero} />
      <CurrentClass />
      <SpacerOut marginBottom={20}>
        {cmsData.content.sections.map((section, index) => {
          switch (section.type) {
            case `logos`:
            default:
              return <Logos lastItem={true} key={index} data={section} />
          }
        })}
      </SpacerOut>
    </TemplateBase>
  )
}
