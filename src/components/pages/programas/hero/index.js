import { Container, Row, Col } from "@/components/common/grid"
import View from "@/components/view"
import Title from "@/components/title"
import HeroStyled from "./styled"

export default function Hero({ cmsData }) {
  return (
    <HeroStyled
      as={"section"}
      padding={"100px 0 200px"}
      paddingDesktop={"190px 0 150px"}
    >
      <Container>
        <Row>
          <Col size={4} sizeDesktop={8} positionDesktop={5}>
            <View textAlign={"center"}>
              <Title as={"h1"} textShadow={"light"}>
                {cmsData.title}
              </Title>
            </View>
          </Col>
        </Row>
      </Container>
    </HeroStyled>
  )
}
