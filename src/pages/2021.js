import cmsData from "@/cms/2021.mock"
import TemplateBase from "@/templates/template-base"
import Hero from "@/components/pages/2021/hero"
import SideBySide from "@/components/sidebyside"
import Separator from "@/components/common/separator"
import { SpacerOut } from "@/components/spacer"

export default function Programas() {
  console.log(cmsData)
  return (
    <TemplateBase cmsData={cmsData.meta}>
      <Hero cmsData={cmsData.hero} />
      <SideBySide mainTagTitle="h2" data={cmsData.sidebyside_1} />
      <SideBySide mainTagTitle="h2" data={cmsData.sidebyside_2} />
    </TemplateBase>
  )
}
