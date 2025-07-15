import React from "react"

function Child({message}:{message:string}) {
  return (
    <div>{message}</div>
  )
}
export default React.memo(Child)