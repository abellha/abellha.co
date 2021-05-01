import { Container, Row, Col } from "@/components/common/grid"
import Link from "next/link"
import View from "@/components/view"
import { SpacerOut } from "@/components/spacer"
import Button from "@/components/common/button"
import { HeroStyled, Logo, TitleStyled, Message } from "./styled"

export default function Hero({ cmsData }) {
  return (
    <HeroStyled
      as={"section"}
      padding={"30px 0 60px"}
      paddingDesktop={"40px 0 200px"}
    >
      <Container>
        <Row>
          <Col size={4} sizeDesktop={10} positionDesktop={4}>
            <View textAlign={"center"}>
              <SpacerOut marginBottom={26}>
                <Link href="/" passHref>
                  <Logo title={cmsData.logo}>{cmsData.logo}</Logo>
                </Link>
              </SpacerOut>
              <TitleStyled as={"h1"}>{cmsData.title}</TitleStyled>
              <SpacerOut marginTop={3} marginBottom={10}>
                <Message as={"h2"} color="highlight">
                  {cmsData.message}
                </Message>
              </SpacerOut>
              <Button
                padding={"small"}
                external={cmsData.button.external}
                title={cmsData.button.text}
                text={cmsData.button.text}
                url={cmsData.button.url}
              />
            </View>
          </Col>
        </Row>
      </Container>
    </HeroStyled>
  )
}
