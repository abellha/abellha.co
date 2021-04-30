import { Container, Row, Col } from "@/components/common/grid"
import View from "@/components/view"
import { HeroStyled, TitleStyled, Message } from "./styled"

export default function Hero({ cmsData }) {
  return (
    <HeroStyled
      as={"section"}
      padding={"100px 0 200px"}
      paddingDesktop={"190px 0 150px"}
    >
      <Container>
        <Row>
          <Col size={4} sizeDesktop={10} positionDesktop={4}>
            <View textAlign={"center"}>
              <TitleStyled as={"h1"}>{cmsData.title}</TitleStyled>
              <Message as={"h2"} color="highlight">
                {cmsData.message}
              </Message>
            </View>
          </Col>
        </Row>
      </Container>
    </HeroStyled>
  )
}
