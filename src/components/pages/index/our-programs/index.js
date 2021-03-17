import { Container, Row, Col } from "@/components/common/grid"
import {
  OurProgramsStyled,
  SwiperCard,
  CardInner,
  CardTitle,
  CardDescription,
  CardImage,
} from "./styled"
import { SpacerIn, SpacerOut } from "@/components/spacer"
import Slider from "@/components/common/slider"
import Swiper from "react-id-swiper"
import Title from "@/components/title"
import Paragraph from "@/components/common/paragraph"
import Button from "@/components/common/button"
import View from "@/components/view"

export default function OurPrograms({ cmsData }) {
  const params = {
    ContainerEl: "div",
    containerClass: "swiper-container our-programs",
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      1080: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  }

  return (
    <OurProgramsStyled
      as={"section"}
      padding={"50px 0 50px"}
      paddingDesktop={"150px 0"}
    >
      <Container>
        <Row>
          <Col size={4} sizeDesktop={8} positionDesktop={5}>
            <View textAlign={"center"}>
              <Title as={"h2"} weight={"light"} color={"light"}>
                {cmsData.title}
              </Title>
              <SpacerOut
                marginTop={3}
                marginBottom={8}
                marginTopDesktop={4}
                marginBottomDesktop={10}
              >
                {cmsData.description &&
                  cmsData.description.map((item, index) => {
                    return (
                      <Paragraph color={"light"} key={index}>
                        {item}
                      </Paragraph>
                    )
                  })}
              </SpacerOut>
            </View>
          </Col>
        </Row>
        <Row>
          <Col size={4} sizeDesktop={16}>
            <Slider>
              <Swiper {...params}>
                {cmsData.programs.slider.map((item, index) => {
                  return (
                    <SwiperCard
                      style={{ width: "270px" }}
                      key={index}
                      as={"div"}
                    >
                      <CardImage
                        src={require(`images/${item.image.url}`)}
                        alt={`foto de ${item.title}`}
                        effect="blur"
                      />
                      <SpacerOut
                        marginRight={2}
                        marginLeft={2}
                        marginBottom={2}
                      >
                        <CardInner paddingAll={0} paddingAllDesktop={0}>
                          <SpacerOut
                            marginTop={2}
                            marginBottom={1}
                            marginTopDesktop={2}
                            marginBottomDesktop={2}
                          >
                            <CardTitle as={"h3"}>{item.title}</CardTitle>
                          </SpacerOut>
                          <SpacerOut marginTop={6} marginBottom={6}>
                            <CardDescription>
                              {item.description}
                            </CardDescription>
                          </SpacerOut>
                          <Button
                            type={"secundary"}
                            title={item.button.text}
                            text={item.button.text}
                            url={item.button.url}
                          />
                        </CardInner>
                      </SpacerOut>
                    </SwiperCard>
                  )
                })}
              </Swiper>
            </Slider>
          </Col>
        </Row>
      </Container>
    </OurProgramsStyled>
  )
}
