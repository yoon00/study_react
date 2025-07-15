import { forwardRef, type RefObject } from "react";

// interface Props{
//   placeholder:string;
// }

interface Props{
  placeholder:string;
  ref: RefObject<HTMLInputElement | null>
}
// const Child = forwardRef<HTMLInputElement, Props>(({ placeholder }, ref) => {
//   return <input ref={ref} type="text" placeholder={placeholder} />;
// })

const Child = ({ placeholder , ref }:Props) => {
  return <input ref={ref} type="text" placeholder={placeholder} />;
}

export default Child;
