import Swiper from "react-id-swiper"
import Slider from "@/components/common/slider"
import { Wrapper, Container, Row, Col } from "@/components/common/grid"
import View from "@/components/view"
import Title from "@/components/title"
import { SpacerOut, SpacerIn } from "@/components/spacer"
import { Photo, Name, Role, Description } from "./styled"

export default function Team({ data }) {
  const params = {
    ContainerEl: "div",
    WrapperEl: "ul",
    containerClass: "swiper-container team",
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
        slidesPerColumn: 3,
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  }

  return (
    <Wrapper>
      <View
        as={"section"}
        padding={"0"}
        paddingDesktop={"0"}
        textAlignDesktop={"center"}
      >
        <SpacerIn
          paddingTop={10}
          paddingBottom={10}
          paddingTopDesktop={30}
          paddingBottomDesktop={30}
        >
          <Container>
            <Row>
              <Col size={4} sizeDesktop={16}>
                <View textAlign={"center"}>
                  <SpacerOut marginBottom={6} marginBottomDesktop={10}>
                    <Title as={"h2"}>{data.title}</Title>
                  </SpacerOut>
                </View>
              </Col>
            </Row>
          </Container>
          <Slider>
            <Swiper {...params}>
              {data.members.map((member, index) => {
                return (
                  <View style={{ width: 300 }} key={index} as={"li"}>
                    <SpacerIn
                      paddingAll={2}
                      paddingTopDesktop={4}
                      paddingBottomDesktop={4}
                      paddingRightDesktop={10}
                      paddingLeftDesktop={10}
                    >
                      <Photo
                        src={require(`images/${member.photo}`)}
                        alt={`foto de ${member.name}`}
                        effect="blur"
                      />
                      <SpacerOut marginTop={1} marginTopDesktop={2}>
                        <Name as={"h3"}>
                          {member.firstName} {member.lastName}
                        </Name>
                      </SpacerOut>
                      <SpacerOut
                        marginTop={0}
                        marginBottom={1}
                        marginTopDesktop={1}
                        marginBottomDesktop={2}
                      >
                        <Role>{member.role}</Role>
                      </SpacerOut>
                      <Description>{member.description}</Description>
                    </SpacerIn>
                  </View>
                )
              })}
            </Swiper>
          </Slider>
        </SpacerIn>
      </View>
    </Wrapper>
  )
}
