import Head from "@/components/common/head"
import Header from "@/components/common/header"
import Zum from "@/components/zum"
import Footer from "@/components/common/footer"
import cmsDataHeader from "@/cms/header.mock"

export default function TemplateBase({ cmsData, children }) {
  return (
    <>
      <Head {...cmsData} />
      <Header data={cmsDataHeader} />
      <main>
        {children}
        <Zum />
      </main>
      <Footer />
    </>
  )
}
