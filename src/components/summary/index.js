import cmsData from "@/cms/summary.mock"

import { Container, Row, Col } from "@/components/common/grid"
import { SpacerIn, SpacerOut } from "@/components/spacer"
import { SummaryStyled, Info, InfoNumber, InfoText } from "./styled"

export default function Summary() {
  return (
    <SummaryStyled as={"section"}>
      <SpacerIn
        paddingTop={8}
        paddingBottom={8}
        paddingTopDesktop={12}
        paddingBottomDesktop={12}
      >
        <Container>
          <Row>
            <Col size={4} sizeDesktop={8}>
              <SpacerOut marginBottom={4} marginBottomDesktop={0}>
                <Info>
                  <InfoNumber>{cmsData.infoBox1.number}</InfoNumber>
                  <InfoText>{cmsData.infoBox1.text}</InfoText>
                </Info>
              </SpacerOut>
            </Col>
            <Col size={4} sizeDesktop={8}>
              <SpacerOut marginBottom={0} marginBottomDesktop={0}>
                <Info>
                  <InfoNumber>{cmsData.infoBox2.number}</InfoNumber>
                  <InfoText>{cmsData.infoBox2.text}</InfoText>
                </Info>
              </SpacerOut>
            </Col>
          </Row>
        </Container>
      </SpacerIn>
    </SummaryStyled>
  )
}
