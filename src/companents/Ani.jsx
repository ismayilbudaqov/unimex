import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import React from 'react'
import image from "../images/barrchair.jpg"

function Ani() {
    
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div>
      
<ScrollContainer>
  <ScrollPage page={0}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <div style={{ fontSize: "30px" }}>Let me show you scroll animation 😀</div>
    </Animator>
  </ScrollPage>
  <ScrollPage page={1}>
    <Animator animation={ZoomInScrollOut}>
      <div style={{ fontSize: "40px" }}><img src={image} alt="" /> </div>
    </Animator>
  </ScrollPage>
  <ScrollPage page={2}>
    <Animator animation={FadeUp}>
      <div style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</div>
    </Animator>
  </ScrollPage>
  <ScrollPage page={3}>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <div className="animator" style={{ fontSize: "40px" }}>
        <Animator animation={MoveIn(-1000, 0)}> <img src={image} alt="" /> </Animator>
        <Animator animation={MoveIn(1000, 0)}> <img src={image} alt="" /></Animator>
        <Animator animation={MoveOut(1000, 0)}> <img src={image} alt="" /></Animator>
        <Animator animation={MoveOut(-1000, 0)}> <img src={image} alt="" /></Animator>
      </div>
    </div>
  </ScrollPage>
  <ScrollPage page={4}>
    <Animator animation={batch(Fade(), Sticky())}>
    
     
    </Animator>
  </ScrollPage>
</ScrollContainer>
    </div>
  )
}






export default Ani