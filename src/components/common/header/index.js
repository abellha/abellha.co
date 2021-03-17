import cmsData from "@/cms/header.mock"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { Container, Row, Col, Hidden } from "@/components/common/grid"
import View from "@/components/view"
import { Logo, MenuTrigger, WrapperMenu, MenuLink } from "./styled"
import Button from "@/components/common/button"

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
          <Col size={3} sizeDesktop={6}>
            {logoBehavior()}
          </Col>
          <Col size={1} sizeDesktop={10}>
            <Hidden forBreakpoint={"desktop"}>
              <View
                display={"flex"}
                alignItems="center"
                height={"100%"}
                justifyContent={"flex-end"}
              >
                <MenuTrigger
                  onClick={() => setIsOpenMenu(!isOpenMenu)}
                  isActive={isOpenMenu}
                >
                  Abrir / Fechar
                </MenuTrigger>
              </View>
            </Hidden>
            <WrapperMenu isActive={isOpenMenu}>
              <View
                as={"ul"}
                display={"flex"}
                alignItems={"flex-start"}
                alignItemsDesktop={"center"}
                height={"100%"}
                justifyContent={"center"}
                justifyContentDesktop={"space-between"}
                flexDirection={"column"}
                flexDirectionDesktop={"row"}
                margin={"-30px 0 0"}
                marginDesktop={"0"}
              >
                {cmsData.menu.items.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={item.url} passHref>
                        <MenuLink
                          onClick={() => setIsOpenMenu(false)}
                          isActive={route === item.url ? true : false}
                          title={item.label}
                        >
                          {item.label}
                        </MenuLink>
                      </Link>
                    </li>
                  )
                })}
              </View>
            </WrapperMenu>
          </Col>
        </Row>
      </Container>
    </View>
  )
}
