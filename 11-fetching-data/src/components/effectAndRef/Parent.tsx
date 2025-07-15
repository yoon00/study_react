import { useEffect, useLayoutEffect } from "react"

function Parent() {
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  })

  useEffect(()=>{
    console.log('useEffect');
    
  })

  console.log('render');

  return (
    <div></div>
  )
}
export default Parent