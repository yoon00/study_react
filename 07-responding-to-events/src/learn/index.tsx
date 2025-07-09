import EventPropagation from "./EventPropagation"
import EventWithSideEffects from "./EventWithSideEffects"
import NavContents from "./NavContents"
import ScrollDown from "./ScrollDown"
import View from "./View"




function Learn() {
  return (
    <div className="Learn">
      <NavContents />
      <View.RespondingToEvents />
      <EventPropagation />
      <EventWithSideEffects/>
      <ScrollDown />
    </div>
  )
}
export default Learn