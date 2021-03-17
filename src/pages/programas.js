import cmsData from "@/cms/programas.mock"
import TemplateBase from "@/templates/template-base"
import Hero from "@/components/pages/programas/hero"
import SideBySide from "@/components/sidebyside"
import Separator from "@/components/common/separator"
import { SpacerOut } from "@/components/spacer"

export default function Programas() {
  return (
    <TemplateBase cmsData={cmsData.meta}>
      <Hero cmsData={cmsData.hero} />
      <SpacerOut marginBottom={"10"}>
        {cmsData.content.sections.map((section, index) => {
          switch (section.type) {
            case `sideBySide`:
            default:
              return (
                <div key={index}>
                  <SideBySide mainTagTitle="h2" data={section} />
                  <Separator />
                </div>
              )
          }
        })}
      </SpacerOut>
    </TemplateBase>
  )
}
