import { useEffect } from "react"
import { Hidden } from "@/components/common/grid"
import { SpacerOut } from "@/components/spacer"
import {
  Image,
  Item,
  Heading,
  HeadingTitle,
  HeadingImg,
  Body,
  InfoTitle,
  DescriptionBody,
  BigNumber,
  BigNumberDescription,
  TestimonialItem,
  TestimonialInfo,
  TestimonialPhoto,
  TestimonialID,
  TestimonialCompany,
  TestimonialDesc,
} from "./styled"

export default function CurrentClassItem(props) {
  function handleItem() {
    props.toggleAccordion(props.id)
    props.handleDataDesktop(props)
  }

  useEffect(() => {
    props.initialState ? handleItem() : null
  }, [])

  return (
    <Item id={props.id}>
      <Heading
        isActiveMobile={props.isActiveMobile}
        isActiveDesktop={props.isActiveDesktop}
        onClick={() => {
          handleItem()
        }}
      >
        <HeadingImg
          src={require(`images/${props.logo}`)}
          alt={props.company}
          effect="blur"
        />
        <HeadingTitle>{props.company}</HeadingTitle>
      </Heading>
      <Hidden forBreakpoint={"desktop"}>
        <Body isActiveMobile={props.isActiveMobile}>
          <SpacerOut marginBottom={7}>
            <SpacerOut marginBottom={3}>
              <InfoTitle>Descrição</InfoTitle>
            </SpacerOut>
            <DescriptionBody>{props.content.description}</DescriptionBody>
          </SpacerOut>
          <SpacerOut marginBottom={10}>
            <SpacerOut marginBottom={3}>
              <InfoTitle>{props.content.results.label}</InfoTitle>
            </SpacerOut>
            {props.content.results.items.map((item, index, array) => {
              return (
                <SpacerOut
                  key={index}
                  marginBottom={index == array.length - 1 ? 0 : 4}
                >
                  <BigNumber>{item.value}</BigNumber>
                  <BigNumberDescription>{item.text}</BigNumberDescription>
                </SpacerOut>
              )
            })}
          </SpacerOut>
          <SpacerOut marginBottom={9}>
            <TestimonialItem>
              <TestimonialPhoto>
                <Image
                  src={require(`images/${props.content.testimonial.photo}`)}
                  alt={`${props.content.testimonial.name} ${props.content.testimonial.role}`}
                  effect="blur"
                />
              </TestimonialPhoto>
              <TestimonialInfo>
                <TestimonialID>{props.content.testimonial.name}</TestimonialID>{" "}
                <TestimonialCompany>
                  {props.content.testimonial.role}
                </TestimonialCompany>
              </TestimonialInfo>
              <TestimonialDesc>
                {props.content.testimonial.description}
              </TestimonialDesc>
            </TestimonialItem>
          </SpacerOut>
        </Body>
      </Hidden>
    </Item>
  )
}
