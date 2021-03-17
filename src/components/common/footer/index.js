import { Wrapper, Container, Row, Col } from "@/components/common/grid"
import View from "@/components/view"
import cmsData from "@/cms/footer.mock"

import {
  FooterStyled,
  Label,
  Text,
  Link,
  SocialLink,
  WhatsappLink,
} from "./styled"

export default function Footer() {
  return (
    <Wrapper>
      <FooterStyled
        as={"footer"}
        padding={"20px 0 320px"}
        paddingDesktop={"150px 0 120px"}
      >
        <Container>
          <Row>
            <Col size={4} sizeDesktop={4} id={"contato"}>
              <View as={"div"} margin={"0 0 40px"} marginDesktop={"0"}>
                <Label>{cmsData.contacts.title}</Label>
                {cmsData.contacts.itemsPhone.map((item, index) => {
                  return (
                    <Text key={index}>
                      <Link
                        href={
                          item.url ?? `tel:${item.value.replace(/\s/g, "")}`
                        }
                        target="_blank"
                        rel={"noreferrer"}
                        title={`${item.title} ${item.value}`}
                      >
                        {item.value}
                      </Link>
                    </Text>
                  )
                })}
                <Text>
                  <Link
                    href={`mailto:${cmsData.contacts.itemEmail.value}`}
                    title={cmsData.contacts.itemEmail.title}
                  >
                    {cmsData.contacts.itemEmail.value}
                  </Link>
                </Text>
              </View>
            </Col>
            <Col size={4} sizeDesktop={5}>
              <View as={"div"} margin={"0 0 40px"} marginDesktop={"0"}>
                <Label>{cmsData.local.title}</Label>
                <Text>
                  <strong>{cmsData.local.city}</strong>
                </Text>
                <Text>{cmsData.local.address}</Text>
              </View>
            </Col>
            <Col size={4} sizeDesktop={5}>
              <View as={"div"}>
                <Label>{cmsData.socialMedia.title}</Label>
                <View
                  as={"ul"}
                  display={"flex"}
                  justifyContent={"flex-start"}
                  width={"260px"}
                  widthDesktop={"100px"}
                  margin={"0 -20px 0 0"}
                >
                  {cmsData.socialMedia.items.map((item, index) => {
                    return (
                      <View as={"li"} margin={"0 20px 0 0"} key={index}>
                        <SocialLink
                          id={item.id}
                          name={item.name}
                          href={item.url}
                          title={item.title}
                          target={"_blank"}
                          rel={"noreferrer"}
                        >
                          {item.name}
                        </SocialLink>
                      </View>
                    )
                  })}
                </View>
                <WhatsappLink
                  href={cmsData.whatsappLink.url}
                  target="_blank"
                  rel={"noreferrer"}
                  title={`${cmsData.whatsappLink.title} ${cmsData.whatsappLink.value}`}
                >
                  {cmsData.whatsappLink.value}
                </WhatsappLink>
              </View>
            </Col>
          </Row>
        </Container>
      </FooterStyled>
    </Wrapper>
  )
}
