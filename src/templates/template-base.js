import cmsDataHeader from "@/cms/header.mock"
import Head from "@/components/common/head"
import Header from "@/components/common/header"

export default function TemplateBase({ cmsData, children }) {
  return (
    <>
      <Head {...cmsData} />
      <Header data={cmsDataHeader} />
      <main>{children}</main>
    </>
  )
}
