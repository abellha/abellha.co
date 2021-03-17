import { Container, Row, Col } from "@/components/common/grid"
import View from "@/components/view"
import Title from "@/components/title"
import HeroStyled from "./styled"

export default function Hero({ cmsData }) {
  return (
    <HeroStyled
      as={"section"}
      padding={"100px 0 30px"}
      paddingDesktop={"230px 0 240px"}
    >
      <Container>
        <Row>
          <Col size={4} sizeDesktop={10} positionDesktop={4}>
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
