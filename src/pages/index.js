import cmsData from "@/cms/index.mock"
import PageIndex from "@/components/pages/index"
import TemplateBase from "@/templates/template-base"

export default function Index() {
  return (
    <TemplateBase cmsData={cmsData.meta}>
      <PageIndex />
    </TemplateBase>
  )
}
