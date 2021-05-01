import { Container, Row, Col } from "@/components/common/grid"
import View from "@/components/view"
import Title from "@/components/title"
import { SpacerOut, SpacerIn } from "@/components/spacer"
import { OurMentorsSerction, Mentors, Mentor, Background, Inner, Photo, Name, Role } from "./styled"

export default function OurMentors({ data }) {

  return (
    <OurMentorsSerction>
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
            <Row>
              <Col size={4} sizeDesktop={16}>
                <Mentors>
                  {data.mentors.map((mentor, index) => {
                    return (
                      <Mentor key={index} >
                        <Background>
                          <SpacerIn
                            paddingAll={6}
                            paddingTopDesktop={7}
                            paddingBottomDesktop={7}
                            paddingRightDesktop={5}
                            paddingLeftDesktop={5}
                          >
                            <Inner>
                              <Photo
                                src={require(`images/${mentor.photo}`)}
                                alt={`foto de ${mentor.name}`}
                                effect="blur"
                              />
                              <div>
                                <SpacerOut marginTop={1} marginTopDesktop={2}>
                                  <Name as={"h3"}>
                                    {mentor.name}
                                  </Name>
                                </SpacerOut>
                                <SpacerOut
                                  marginTop={0}
                                  marginBottom={1}
                                  marginTopDesktop={1}
                                  marginBottomDesktop={2}
                                >
                                  <Role>{mentor.role}</Role>
                                </SpacerOut>
                              </div>
                            </Inner>
                          </SpacerIn>
                        </Background>
                      </Mentor>
                    )
                  })}
                </Mentors>
              </Col>
            </Row>
          </Container>
        </SpacerIn>
      </View>
    </OurMentorsSerction>
  )
}
