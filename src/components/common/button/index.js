import PropTypes from "prop-types"
import ButtonStyled from "./styled"
import Link from "next/link"

export default function Button(props) {
  if (props.as === "button") {
    return (
      <ButtonStyled
        padding={props.padding}
        as={props.as}
        display={props.display}
        type={props.type}
      >
        {props.text}
      </ButtonStyled>
    )
  }

  if (props.external) {
    return (
      <ButtonStyled
        href={props.url}
        padding={props.padding}
        title={props.title ?? props.text}
        display={props.display}
        type={props.type}
        target="_blank"
      >
        {props.text}
      </ButtonStyled>
    )
  }

  return (
    <Link prefetch={props.prefetch} href={props.url} passHref>
      <ButtonStyled
        padding={props.padding}
        title={props.title ?? props.text}
        display={props.display}
        type={props.type}
      >
        {props.text}
      </ButtonStyled>
    </Link>
  )
}

Button.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}
