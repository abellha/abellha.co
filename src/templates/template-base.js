import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { useRouter } from "next/router"
import Head from "next/head"
import Header from "@/components/common/header"
import Zum from "@/components/zum"
import Footer from "@/components/common/footer"
import defaultData from "@/cms/default.mock"
import gtag from "@/utils/gtag"

export default function TemplateBase({ cmsData, children }) {
  const theme = useContext(ThemeContext)
  const { route } = useRouter()

  function titleBehavior() {
    const title = cmsData?.title ? cmsData.title : defaultData.meta.title
    if (route == "/") {
      return `${defaultData.company.name} | ${title}`
    } else {
      return `${title} | ${defaultData.company.name}`
    }
  }

  function descriptionBehavior() {
    const description = cmsData?.description
      ? cmsData.description
      : defaultData.meta.description
    return description
  }

  return (
    <>
      <Head>
        {process.env.NEXT_PUBLIC_GA_ID && gtag()}

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="format-detection" content="telephone=no" />
        <meta lang="pt-br" />
        <meta charSet="utf-8" />
        <title>{titleBehavior()}</title>
        <meta name="description" content={descriptionBehavior()} />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_BASE}${cmsData.permalink}`}
        />

        {/* BEGIN - OPENGRAPH SHARE META TAGS */}
        <meta property="og:site_name" content={defaultData.company.name} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content={titleBehavior()} />
        <meta property="og:description" content={descriptionBehavior()} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_URL_BASE}${cmsData.permalink}`}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_URL_BASE}/social-share.jpg`}
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        {/* END - OPENGRAPH SHARE META TAGS */}

        {/* BEGIN - OPENGRAPH SHARE META TAGS */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={titleBehavior()} />
        <meta name="twitter:description" content={descriptionBehavior()} />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_URL_BASE}/social-share.jpg`}
        />
        {/* END - OPENGRAPH SHARE META TAGS */}

        <link
          href="https://fonts.googleapis.com/css2?family=Bellota+Text:wght@300;400;700&family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href={`${process.env.NEXT_PUBLIC_URL_BASE}apple-icon-57x57.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href={`${process.env.NEXT_PUBLIC_URL_BASE}apple-icon-60x60.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={`${process.env.NEXT_PUBLIC_URL_BASE}apple-icon-72x72.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${process.env.NEXT_PUBLIC_URL_BASE}apple-icon-76x76.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={`${process.env.NEXT_PUBLIC_URL_BASE}apple-icon-114x114.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={`${process.env.NEXT_PUBLIC_URL_BASE}apple-icon-120x120.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href={`${process.env.NEXT_PUBLIC_URL_BASE}apple-icon-144x144.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${process.env.NEXT_PUBLIC_URL_BASE}apple-icon-152x152.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.NEXT_PUBLIC_URL_BASE}apple-icon-180x180.png`}
          href=""
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${process.env.NEXT_PUBLIC_URL_BASE}android-icon-192x192.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.NEXT_PUBLIC_URL_BASE}favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${process.env.NEXT_PUBLIC_URL_BASE}favicon-96x96.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.NEXT_PUBLIC_URL_BASE}favicon-16x16.png`}
        />
        <link
          rel="manifest"
          href={`${process.env.NEXT_PUBLIC_URL_BASE}manifest.json`}
        />
        <meta name="msapplication-TileColor" content={theme.colors.highlight} />
        <meta
          name="msapplication-TileImage"
          content={`${process.env.NEXT_PUBLIC_URL_BASE}/ms-icon-144x144.png`}
        />
        <meta name="theme-color" content={theme.colors.highlight} />
      </Head>
      <Header />
      <main>
        {children}
        <Zum />
      </main>
      <Footer />
    </>
  )
}
