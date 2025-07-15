import { useEffect, useRef } from 'react';
import S from './Home.module.css'
import gsap from 'gsap'

function Home() {
    const textRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if(textRef.current){
            gsap.fromTo(textRef.current.children, {
                x:40,
                opacity:0
            },{
                x:10,
                opacity:1,
                stagger:0.3
            })
        }
    })
  return (
    <div className={S.container}>
      <div ref={textRef}>
        <h2><strong>Apple</strong> is</h2>
        <span>everything</span>
      </div>
      <video src="/visual.mp4" autoPlay muted loop playsInline></video>
    </div>
  );
}
export default Home;
