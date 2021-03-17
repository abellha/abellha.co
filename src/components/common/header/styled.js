import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.secundary};
  display: inline-block;
  background: transparent url(${require(`images/abellha.png?inline`)}) 0 0
    no-repeat;
  background-size: contain;
  width: 167px;
  height: 37px;
  overflow: hidden;
  text-indent: -9999px;

  @media (min-width: ${breakpoints.desktop}) {
    width: 212px;
    height: 47px;
  }
`

const MenuTrigger = styled.button`
  display: inline-block;
  overflow: hidden;

  ${(props) => {
    switch (props.isActive) {
      case true:
        return `
        background: transparent url(${require(`images/icon_header-menu_close.svg?inline`)});
        `
      case false:
      default:
        return `
        background: transparent url(${require(`images/icon_header-menu.svg?inline`)});
      `
    }
  }}

  background-position: 0 0;
  background-size: cover;
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  text-indent: -9999px;
  float: right;
  position: ${(props) => (props.isActive ? "fixed" : "relative")};
  top: ${(props) => (props.isActive ? "20px" : "0")};
  right: ${(props) => (props.isActive ? "20px" : "0")};
  z-index: 100;
  outline: 0;
  cursor: pointer;
`

const WrapperMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.isActive ? "block" : "none")};
  background: ${({ theme }) => theme.backgrounds.tertiary}
    url(${require(`images/bg_header-menu.png`)}) center bottom no-repeat;
  background-size: 80%;
  width: 100%;
  height: 100%;
  padding: 0 7vw;
  z-index: 50;

  @media (min-width: ${breakpoints.desktop}) {
    position: unset;
    display: block;
    background: transparent none;
    padding: 0;
  }
`

const MenuLink = styled.a`
  font-family: "Bellota Text", cursive;
  font-size: 3.2rem;
  line-height: 7rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  padding-bottom: 1px;

  ${(props) => (props.isActive ? "&," : "")}
  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-family: "Open Sans", sans-serif;
    font-size: 1.6rem;
    line-height: 2rem;
  }
`

export { Logo, MenuTrigger, WrapperMenu, MenuLink }
