import TemplateBase from "@/templates/template-base"
import cmsData from "@/cms/quem-somos.mock"
import { SpacerOut } from "@/components/spacer"
import SideBySide from "@/components/sidebyside"
import Team from "@/components/pages/quem-somos/team"
import Summary from "@/components/summary"
import Mentors from "@/components/pages/quem-somos/mentors"
import NaMidia from "@/components/pages/quem-somos/na-midia"

export default function QuemSomos() {
  return (
    <TemplateBase cmsData={cmsData.meta}>
      <SpacerOut marginTop={8} marginTopDesktop={18}>
        <SideBySide mainTagTitle="h1" data={cmsData.sidebyside} />
      </SpacerOut>
      <Team data={cmsData.team} />
      <Summary />
      <Mentors />
      <NaMidia last={true} />
    </TemplateBase>
  )
}
