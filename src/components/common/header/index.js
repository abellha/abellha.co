import cmsData from "@/cms/header.mock"
import { Col, Container, Row } from "@/components/common/grid"
import View from "@/components/view"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Logo } from "./styled"

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const [isLoadingComplete, setIsLoadingComplete] = React.useState(false)
  const { route } = useRouter()

  function logoBehavior() {
    if (route == "/") {
      return <Logo>{cmsData.logo}</Logo>
    } else {
      return (
        <Link href="/" passHref>
          <Logo as={"a"} title={cmsData.logo}>
            {cmsData.logo}
          </Logo>
        </Link>
      )
    }
  }

  function pageLoad() {
    setIsOpenMenu(false)
    setIsLoadingComplete(true)
  }

  useEffect(() => {
    window.addEventListener("load", pageLoad())
  }, [])

  return (
    <View
      as={"header"}
      width={"100%"}
      padding={"20px 0"}
      paddingDesktop={"40px 0"}
      margin={"0 0 -80px"}
      marginDesktop={"0 0 -130px"}
    >
      <Container>
        <Row>
          <Col size={4} sizeDesktop={16}>
            {logoBehavior()}
          </Col>
        </Row>
      </Container>
    </View>
  )
}
