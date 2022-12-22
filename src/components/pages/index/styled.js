import styled from "styled-components"

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  line-height: 2.5rem;
  text-decoration: none;
  text-decoration: underline;
`

export { Link }
