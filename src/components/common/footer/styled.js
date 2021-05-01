import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"
import View from "@/components/view"

const FooterStyled = styled(View)`
  background: transparent url(${require(`images/background_footer.svg?inline`)})
    center 118% no-repeat;
  background-size: auto 380px;

  @media (min-width: ${breakpoints.desktop}) {
    background: transparent
      url(${require(`images/background_footer.svg?inline`)}) calc(100% + 220px)
      calc(100% + 70px) no-repeat;
    background-size: auto 360px;
  }
`

const Label = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Playfair Display", serif;
  font-size: 2.4rem;
  line-height: 2.7rem;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.desktop}) {
  }
`
const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  line-height: 2.8rem;
  margin: ${(props) => props.margin};

  @media (min-width: ${breakpoints.desktop}) {
    margin: ${(props) => props.marginDesktop};
  }
`

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  line-height: 2.5rem;
  text-decoration: none;

  &:hover,
  &focus {
    text-decoration: underline;
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`

const SocialLink = styled.a`
  ${(props) => {
    switch (props.id) {
      case "facebook":
        return `background-image: url(${require(`images/icon_social-link_facebook.svg?inline`)});`
      case "instagram":
        return `background-image: url(${require(`images/icon_social-link_instagram.svg?inline`)});`
      case "linkedin":
        return `background-image: url(${require(`images/icon_social-link_linkedin.svg?inline`)});`
      case "medium":
        return `background-image: url(${require(`images/icon_social-link_medium.svg?inline`)});`
    }
  }}

  display: inline-block;
  background-color: transparent;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  text-indent: -9999px;

  &:last-of-type {
    margin-right: 0;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 38px;
    height: 38px;
  }
`

const WhatsappLink = styled.a`
  position: fixed;
  z-index: 49;
  width: 55px;
  height: 55px;
  bottom: 10px;
  right: 10px;
  text-indent: -9999px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${require(`images/icon_whatsapp.svg?inline`)});
`

export { FooterStyled, Label, Text, Link, SocialLink, WhatsappLink }
