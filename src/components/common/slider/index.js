import { SpacerIn } from "@/components/spacer"
import SwiperStyled from "./styled"

export default function Slider({ children }) {
  return (
    <SpacerIn paddingLeftDesktop={0} paddingLeft={2} paddingRightDesktop={0}>
      <SwiperStyled>{children}</SwiperStyled>
    </SpacerIn>
  )
}
