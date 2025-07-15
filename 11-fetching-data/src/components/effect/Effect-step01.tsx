import { useEffect, useState } from "react";

function Effect() {

  const [count, setCount] = useState(0);
      console.log("r");
  useEffect(() => {
    console.log('useEffect');
    // setCount(count + 1);
    const id = setInterval(() => {
      console.log('hello');
    }, 1000);

    return () => {
      clearInterval(id);
    }
  })

  return (
    <div>
      <p>카운트: {count}</p>
      <button type="button" onClick={()=>setCount(count + 1)}> +1 </button>
    </div>
  )
}
export default Effect