import { useState } from "react"
import cmsData from "@/cms/current-class.mock"
import { Container, Row, Col } from "@/components/common/grid"
import { SpacerIn, SpacerOut } from "@/components/spacer"
import View from "@/components/view"
import Title from "@/components/title"
import {
  CurrentClassStyled,
  Items,
  ItemsHeading,
  Content,
  TestimonialContent,
} from "./styled"
import CurrentClassItem from "./current-class-item"
import {
  Image,
  InfoTitle,
  DescriptionBody,
  BigNumber,
  BigNumberDescription,
  TestimonialPhoto,
  TestimonialID,
  TestimonialCompany,
  TestimonialDesc,
} from "./current-class-item/styled"

export default function CurrentClass() {
  const [activeItemMobile, setActiveItemMobile] = useState("")
  const [activeItemDesktop, setActiveItemDesktop] = useState("")

  function toggleAccordion(element) {
    if (activeItemMobile == element) {
      setActiveItemMobile("")
    } else {
      setActiveItemMobile(element)
    }
  }

  function handleDataDesktop(dataToShow) {
    setActiveItemDesktop(dataToShow)
  }

  function titleSection() {
    return (
      <Row>
        <Col size={4} sizeDesktop={16}>
          <SpacerOut marginBottom={2} marginBottomDesktop={4}>
            <Title as={"h2"} size={"size2"} weight={"light"}>
              Turma 2020
            </Title>
          </SpacerOut>
        </Col>
      </Row>
    )
  }

  function desktopItem() {
    return (
      <Content forBreakpoint={"mobile"}>
        <SpacerIn
          paddingTopDesktop={12}
          paddingBottomDesktop={12}
          paddingLeftDesktop={16}
          paddingRightDesktop={16}
        >
          <Row>
            <Col sizeDesktop={6}>
              <SpacerOut marginBottomDesktop={5}>
                <InfoTitle>Descrição</InfoTitle>
              </SpacerOut>
              <DescriptionBody>
                {activeItemDesktop.content?.description &&
                  activeItemDesktop.content.description}
              </DescriptionBody>
            </Col>
            {activeItemDesktop.content?.results && (
              <Col positionDesktop={8} sizeDesktop={9}>
                <SpacerOut marginBottomDesktop={5}>
                  <InfoTitle>
                    {activeItemDesktop.content.results.label}
                  </InfoTitle>
                </SpacerOut>
                <View displayDesktop={"flex"}>
                  {activeItemDesktop.content?.results.items.map(
                    (item, index, array) => {
                      return (
                        <SpacerOut
                          key={index}
                          marginRight={index == array.length - 1 ? 0 : 4}
                        >
                          <View
                            widthDesktop={"100%"}
                            maxWidthDesktop={"200px"}
                            key={index}
                          >
                            <BigNumber>{item.value}</BigNumber>
                            <BigNumberDescription>
                              {item.text}
                            </BigNumberDescription>
                          </View>
                        </SpacerOut>
                      )
                    }
                  )}
                </View>
              </Col>
            )}
          </Row>
          {activeItemDesktop.content?.testimonial && (
            <TestimonialContent displayDesktop={"flex"}>
              <SpacerOut marginRightDesktop={7}>
                <TestimonialPhoto>
                  <Image
                    src={require(`images/${activeItemDesktop.content.testimonial.photo}`)}
                    alt={`${activeItemDesktop.content.testimonial.name} ${activeItemDesktop.content.testimonial.role}`}
                    effect="blur"
                  />
                </TestimonialPhoto>
              </SpacerOut>
              <View>
                <SpacerOut marginBottomDesktop={4}>
                  <TestimonialDesc>
                    "{activeItemDesktop.content.testimonial.description}"
                  </TestimonialDesc>
                </SpacerOut>
                <View displayDesktop={"flex"} alignItemsDesktop={"center"}>
                  <SpacerOut marginRightDesktop={1}>
                    <TestimonialID>
                      {activeItemDesktop.content.testimonial.name}
                    </TestimonialID>
                  </SpacerOut>
                  <TestimonialCompany>
                    {activeItemDesktop.content.testimonial.role}
                  </TestimonialCompany>
                </View>
              </View>
            </TestimonialContent>
          )}
        </SpacerIn>
      </Content>
    )
  }

  return (
    <CurrentClassStyled
      as={"section"}
      padding={"0 0 30px"}
      paddingDesktop={"0 0 100px"}
    >
      <Container>
        {titleSection()}
        <Row>
          <Col size={4} sizeDesktop={16}>
            <Items>
              <ItemsHeading>
                {cmsData.items.map((item, index) => {
                  return (
                    <CurrentClassItem
                      isActiveMobile={
                        activeItemMobile == item.id ? true : false
                      }
                      isActiveDesktop={
                        activeItemDesktop.id == item.id ? true : false
                      }
                      id={item.id}
                      key={index}
                      toggleAccordion={toggleAccordion}
                      handleDataDesktop={handleDataDesktop}
                      initialState={item.initialState}
                      logo={item.logo}
                      company={item.company}
                      content={item.content}
                    />
                  )
                })}
              </ItemsHeading>
              {desktopItem()}
            </Items>
          </Col>
        </Row>
      </Container>
    </CurrentClassStyled>
  )
}
