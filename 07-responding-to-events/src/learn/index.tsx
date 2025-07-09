import EventPropagation from "./EventPropagation"
import NavContents from "./NavContents"
import View from "./View"




function Learn() {
  return (
    <div className="Learn">
      <NavContents />
      <View.RespondingToEvents />
      <EventPropagation />
    </div>
  )
}
export default Learn