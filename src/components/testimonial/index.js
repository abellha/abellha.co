import React, { useRef, useState, useEffect } from "react"
import Swiper from "react-id-swiper"
import cmsData from "@/cms/testimonial.mock"
import Slider from "@/components/common/slider"
import { Container, Row, Col, Hidden } from "@/components/common/grid"
import View from "@/components/view"
import Title from "@/components/title"
import { SpacerOut, SpacerIn } from "@/components/spacer"
import Paragraph from "@/components/common/paragraph"
import {
  TestimonialStyled,
  Photo,
  Description,
  ButtonPrev,
  ButtonNext,
} from "./styled"

export default function Testimonial() {
  const ref = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isBeginning, setIsBeginning] = useState(null)
  const [isEnd, setIsEnd] = useState(null)

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev()
    }
  }

  const updateIndex = () => {
    setCurrentIndex(ref.current.swiper.realIndex)
  }

  useEffect(() => {
    const swiperInstance = ref.current.swiper

    if (swiperInstance) {
      setIsBeginning(ref.current.swiper.isBeginning)
      setIsEnd(ref.current.swiper.isEnd)
      swiperInstance.on("slideChange", updateIndex)
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex)
      }
    }
  }, [updateIndex])

  const params = {
    ContainerEl: "div",
    containerClass: "swiper-container testimonial",
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }

  return (
    <TestimonialStyled as={"section"} textAlignDesktop={"center"}>
      <SpacerIn
        paddingTop={10}
        paddingBottom={10}
        paddingTopDesktop={30}
        paddingBottomDesktop={10}
      >
        <Container>
          <Row>
            <Col size={4} sizeDesktop={16}>
              <View textAlign={"center"}>
                <SpacerOut marginBottom={8}>
                  <Title as={"h2"}>{cmsData.title}</Title>
                </SpacerOut>
              </View>
            </Col>
          </Row>
          <Row>
            <Col size={4} positionDesktop={3} sizeDesktop={12}>
              <Slider>
                <Hidden forBreakpoint={"mobile"}>
                  <ButtonPrev isBeginning={isBeginning} onClick={goPrev}>
                    Slide Anterior
                  </ButtonPrev>
                  <ButtonNext isEnd={isEnd} onClick={goNext}>
                    Próximo Slide
                  </ButtonNext>
                </Hidden>
                <Swiper {...params} ref={ref}>
                  {cmsData.items.map((item, index) => {
                    return (
                      <View textAlign={"center"} key={index}>
                        <View>
                          <SpacerOut marginBottom={5}>
                            <Photo
                              src={require(`images/${item.photo}`)}
                              alt={`foto de ${item.info}`}
                              effect="blur"
                            />
                          </SpacerOut>
                        </View>
                        <SpacerIn
                          paddingRight={0}
                          paddingLeft={0}
                          paddingRightDesktop={16}
                          paddingLeftDesktop={16}
                        >
                          <SpacerOut marginBottom={3}>
                            <Description>"{item.testimonial}"</Description>
                          </SpacerOut>
                          <Paragraph>{item.info}</Paragraph>
                        </SpacerIn>
                      </View>
                    )
                  })}
                </Swiper>
              </Slider>
            </Col>
          </Row>
        </Container>
      </SpacerIn>
    </TestimonialStyled>
  )
}
