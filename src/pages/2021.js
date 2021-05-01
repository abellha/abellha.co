import cmsData from "@/cms/2021.mock"
import TemplateLanding from "@/templates/template-landing"
import Hero from "@/components/pages/2021/hero"
import SideBySide from "@/components/sidebyside"
import OurPrograms from "@/components/pages/2021/our-programs"
import OurMentors from "@/components/pages/2021/our-mentors"
import Team from "@/components/pages/2021/team"

export default function Page2021() {
  return (
    <TemplateLanding cmsData={cmsData.meta}>
      <Hero cmsData={cmsData.hero} />
      <SideBySide mainTagTitle="h2" data={cmsData.sidebyside_1} />
      <OurPrograms cmsData={cmsData.ourPrograms} />
      <SideBySide mainTagTitle="h2" data={cmsData.sidebyside_2} />
      <OurMentors data={cmsData.ourMentors} />
      <Team data={cmsData.team} />
    </TemplateLanding>
  )
}
