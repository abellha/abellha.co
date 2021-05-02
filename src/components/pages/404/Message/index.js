import { MessageStyled } from "./styled"

export default function Message({ cmsData }) {
  return <MessageStyled>{cmsData.text}</MessageStyled>
}
