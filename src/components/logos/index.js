import { Container, Row, Col, Hidden } from "@/components/common/grid"
import View from "@/components/view"
import Title from "@/components/title"
import { SpacerOut, SpacerIn } from "@/components/spacer"
import { LogoStyled, ImageItem, Image } from "./styled"

export default function Logos({ data, lastItem }) {
  return (
    <LogoStyled>
      <SpacerIn
        paddingTop={data.title && 10}
        paddingBottom={lastItem ? 0 : 10}
        paddingTopDesktop={data.title && 10}
        paddingBottomDesktop={lastItem ? 0 : 30}
      >
        <Container>
          {data.title && (
            <Row>
              <Col size={4} sizeDesktop={16}>
                <View textAlign={"center"}>
                  <SpacerOut marginBottom={8}>
                    <Title as={"h2"}>{data.title}</Title>
                  </SpacerOut>
                </View>
              </Col>
            </Row>
          )}

          <View
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            {data.items.map((item, index) => {
              return (
                <ImageItem key={index}>
                  <Image
                    src={require(`images/acelerados/${item.url}`)}
                    alt={item.alt}
                    effect="blur"
                  />
                </ImageItem>
              )
            })}
          </View>
        </Container>
      </SpacerIn>
    </LogoStyled>
  )
}
