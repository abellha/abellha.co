import cmsData from "@/cms/404.mock"
import TemplateBase from "@/templates/template-base"
import Message from "@/components/pages/404/message"
import { Wrapper, Container, Row, Col } from "@/components/common/grid"

export default function Page404() {
  return (
    <TemplateBase cmsData={cmsData.meta}>
      <Wrapper>
        <Container>
          <Row>
            <Col size={6} sizeDesktop={18}>
              <Message cmsData={cmsData.message} />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </TemplateBase>
  )
}
