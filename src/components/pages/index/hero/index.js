import { Wrapper, Container, Row, Col } from "@/components/common/grid"
import Title from "@/components/title"
import Paragraph from "@/components/common/paragraph"
import { SpacerOut } from "@/components/spacer"
import HeroStyled from "./styled"

export default function Hero({ cmsData }) {
  return (
    <Wrapper>
      <HeroStyled
        as={"section"}
        padding={"100px 0 300px"}
        paddingDesktop={"160px 0 220px"}
      >
        <Container>
          <Row>
            <Col size={4} sizeDesktop={8}>
              <SpacerOut marginBottom={4} marginBottomDesktop={5}>
                <Title as={"h2"}>{cmsData.title}</Title>
              </SpacerOut>
              {cmsData.description &&
                cmsData.description.map((item, index) => {
                  return <Paragraph key={index}>{item}</Paragraph>
                })}
            </Col>
          </Row>
        </Container>
      </HeroStyled>
    </Wrapper>
  )
}
