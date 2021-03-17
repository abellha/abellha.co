import View from "@/components/view"

export default function Zum() {
  return (
    <View maxWidth={"280px"} margin={"0 auto"}>
      <iframe
        src={"https://zumzum.substack.com/embed"}
        width={"280"}
        height={"320"}
        style={{ Border: "1px solid #EEE", Background: "white" }}
        frameBorder={"0"}
        scrolling={"no"}
      />
    </View>
  )
}
