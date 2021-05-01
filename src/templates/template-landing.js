import Head from "@/components/common/head"
import Header from "@/components/common/header"
import Zum from "@/components/zum"
import Footer from "@/components/common/footer"

export default function TemplateLanding({ cmsData, children }) {
  return (
    <>
      <Head {...cmsData} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
