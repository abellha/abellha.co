import { useRef, useState, useCallback, useEffect } from "react"
import cmsData from "@/cms/mentors.mock"
import Swiper from "react-id-swiper"
import Slider from "@/components/common/slider"
import { Container, Row, Col, Hidden } from "@/components/common/grid"
import View from "@/components/view"
import Title from "@/components/title"
import Paragraph from "@/components/common/paragraph"
import { SpacerOut, SpacerIn } from "@/components/spacer"
import {
  MentorsStyled,
  MentorItem,
  Photo,
  TestimonialStyled,
  InfoStyled,
  ButtonPrev,
  ButtonNext,
} from "./styled"

export default function Mentors() {
  const swiperRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isBeginning, setIsBeginning] = useState(null)
  const [isEnd, setIsEnd] = useState(null)

  const params = {
    ContainerEl: "div",
    containerClass: "swiper-container mentors",
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
        spaceBetween: 20,
      },
    },
  }

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const updateIndex = () => {
    setCurrentIndex(swiperRef.current.swiper.realIndex)
  }

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper

    if (swiperInstance) {
      setIsBeginning(swiperRef.current.swiper.isBeginning)
      setIsEnd(swiperRef.current.swiper.isEnd)
      swiperInstance.on("slideChange", updateIndex)
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex)
      }
    }
  }, [updateIndex])

  return (
    <MentorsStyled as={"section"} textAlignDesktop={"center"}>
      <SpacerIn
        paddingTop={10}
        paddingBottom={10}
        paddingTopDesktop={30}
        paddingBottomDesktop={30}
      >
        <Container>
          <Row>
            <Col size={4} sizeDesktop={14}>
              <View textAlign={"center"} textAlignDesktop={"left"}>
                <SpacerOut marginBottom={4} marginBottomDesktop={4}>
                  <Title as={"h2"}>{cmsData.title}</Title>
                </SpacerOut>
              </View>
            </Col>
          </Row>
          <Row>
            <Col size={4} sizeDesktop={14}>
              <View textAlign={"center"} textAlignDesktop={"left"}>
                <SpacerOut marginBottom={8} marginBottomDesktop={6}>
                  <Paragraph>{cmsData.subtitle}</Paragraph>
                </SpacerOut>
              </View>
            </Col>
            <Col sizeDesktop={2}>
              <Hidden forBreakpoint={"mobile"}>
                <View>
                  <ButtonPrev
                    isBeginning={isBeginning}
                    className={"slider-prev"}
                    onClick={goPrev}
                  >
                    Slide Anterior
                  </ButtonPrev>
                  <ButtonNext
                    isEnd={isEnd}
                    className={"slider-next"}
                    onClick={goNext}
                  >
                    Próximo Slide
                  </ButtonNext>
                </View>
              </Hidden>
            </Col>
          </Row>
        </Container>
        <Container noPadding={true} noPaddingDesktop={false}>
          <Slider>
            <Swiper {...params} ref={swiperRef}>
              {cmsData.mentors.map((mentor, index) => {
                return (
                  <MentorItem
                    as={"div"}
                    display={"flex"}
                    style={{ width: 300 }}
                    textAlign={"center"}
                    flexDirection={"column"}
                    key={index}
                  >
                    <SpacerOut marginBottom={2}>
                      <Photo
                        src={require(`images/${mentor.photo}`)}
                        alt={`foto de ${mentor.info}`}
                        effect="blur"
                      />
                    </SpacerOut>
                    <View
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      height={"100%"}
                    >
                      <SpacerOut marginBottom={2}>
                        <TestimonialStyled>
                          {mentor.testimonial}
                        </TestimonialStyled>
                      </SpacerOut>
                      <InfoStyled>
                        {mentor.info.name}
                        <br />
                        {mentor.info.role}
                      </InfoStyled>
                    </View>
                  </MentorItem>
                )
              })}
            </Swiper>
          </Slider>
        </Container>
      </SpacerIn>
    </MentorsStyled>
  )
}
