import { useRef, useState, useCallback, useEffect } from "react"
import cmsData from "@/cms/na-midia.mock"
import Swiper from "react-id-swiper"
import Slider from "@/components/common/slider"
import { Container, Row, Col, Hidden } from "@/components/common/grid"
import View from "@/components/view"
import Title from "@/components/title"
import Paragraph from "@/components/common/paragraph"
import { SpacerOut, SpacerIn } from "@/components/spacer"
import {
  NaMidiaStyled,
  NaMidiaItem,
  NaMidiaItemImage,
  ButtonPrev,
  ButtonNext,
} from "./styled"

export default function NaMidia(props) {
  const swiperRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isBeginning, setIsBeginning] = useState(null)
  const [isEnd, setIsEnd] = useState(null)

  const params = {
    ContainerEl: "div",
    containerClass: "swiper-container na-midia",
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
    <NaMidiaStyled as={"section"} textAlignDesktop={"center"}>
      <SpacerIn
        paddingTop={10}
        paddingBottom={10}
        paddingTopDesktop={30}
        paddingBottomDesktop={props.last ? 10 : 30}
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
            <Col sizeDesktop={2}>
              <Hidden forBreakpoint={"mobile"}>
                <View>
                  <ButtonPrev
                    isBeginning={isBeginning}
                    className={"slider-prev"}
                    onClick={goPrev}
                  >
                    Anterior
                  </ButtonPrev>
                  <ButtonNext
                    isEnd={isEnd}
                    className={"slider-next"}
                    onClick={goNext}
                  >
                    Próximo
                  </ButtonNext>
                </View>
              </Hidden>
            </Col>
          </Row>
        </Container>
        <Container noPadding={true} noPaddingDesktop={false}>
          <Slider>
            <Swiper {...params} ref={swiperRef}>
              {cmsData.items.map((item, index) => {
                return (
                  <NaMidiaItem
                    as={"div"}
                    display={"flex"}
                    style={{ width: 300 }}
                    textAlign={"center"}
                    flexDirection={"column"}
                    key={index}
                  >
                    <NaMidiaItemImage
                      src={require(`images/${item.url}`)}
                      alt={`${item.alt}`}
                      effect="blur"
                    />
                  </NaMidiaItem>
                )
              })}
            </Swiper>
          </Slider>
        </Container>
      </SpacerIn>
    </NaMidiaStyled>
  )
}
