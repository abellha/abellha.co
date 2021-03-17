import { Wrapper, Container, Row, Col } from "@/components/common/grid"
import { SpacerOut } from "@/components/spacer"
import Title from "@/components/title"
import Paragraph from "@/components/common/paragraph"
import Button from "@/components/common/button"
import { SideBySideStyled, Blockquote, Image } from "./styled"

export default function SideBySide({ mainTagTitle, data }) {
  function _info() {
    return (
      <>
        <SpacerOut marginBottom={4} marginBottomDesktop={10}>
          <Title as={mainTagTitle}>{data.title}</Title>
        </SpacerOut>
        <SpacerOut marginBottom={4} marginBottomDesktop={10}>
          <Paragraph dangerouslySetInnerHTML={{ __html: data.description }} />
        </SpacerOut>
        {data.blockquote && (
          <SpacerOut marginBottom={4} marginBottomDesktop={10}>
            <Blockquote>{data.blockquote}</Blockquote>
          </SpacerOut>
        )}
        {data.button && (
          <Button
            title={data.button.text}
            text={data.button.text}
            url={data.button.url}
          />
        )}
      </>
    )
  }

  function _image(infoOrder, image) {
    let marginBottom,
      marginTop = 0

    infoOrder == "last" ? (marginBottom = 5) : (marginTop = 5)

    return (
      <SpacerOut
        marginBottom={marginBottom}
        marginTop={marginTop}
        marginBottomDesktop={0}
        marginTopDesktop={0}
      >
        <Image
          src={require(`images/${image.src}`)}
          alt={image.alt}
          effect="blur"
        />
      </SpacerOut>
    )
  }

  return (
    <Wrapper id={data.id}>
      <SideBySideStyled as={"section"} model={data.model}>
        <Container>
          <Row>
            <Col
              size={4}
              positionDesktop={9}
              sizeDesktop={8}
              orderDesktop={2}
              alignSelfDesktop={"center"}
              order={
                (data.infoOrder == "last" && data.infoOrderDesktop == "last") ||
                (data.infoOrder == "first" && data.infoOrderDesktop == "first")
                  ? 2
                  : 0
              }
            >
              {data.infoOrderDesktop == "last"
                ? _info()
                : _image(data.infoOrder, data.featureImage)}
            </Col>
            <Col
              size={4}
              positionDesktop={1}
              sizeDesktop={7}
              alignSelfDesktop={"center"}
            >
              {data.infoOrderDesktop == "first"
                ? _info()
                : _image(data.infoOrder, data.featureImage)}
            </Col>
          </Row>
        </Container>
      </SideBySideStyled>
    </Wrapper>
  )
}
