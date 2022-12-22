import { Col, Container, Row, Wrapper } from "@/components/common/grid"
import { SpacerOut } from "@/components/spacer"
import View from "@/components/view"
import { Link } from "./styled"

export default function PageIndex() {
  return (
    <Wrapper>
      <View
        as={"section"}
        padding={"100px 0 300px"}
        paddingDesktop={"160px 0 220px"}
        textAlign="center"
      >
        <Container>
          <Row>
            <Col size={4} sizeDesktop={16}>
              <SpacerOut marginBottom={4} marginBottomDesktop={5}>
                <Link href="mailto:oi@abellha.co">oi@abellha.co</Link>
              </SpacerOut>
            </Col>
          </Row>
        </Container>
      </View>
    </Wrapper>
  )
}
