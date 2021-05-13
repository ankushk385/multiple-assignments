import React, { useEffect, useRef } from "react";
import gsap, { TimelineLite, Power2 } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);
const Component3 = () => {
   


  let card3 = useRef(null);

  let para3 = useRef(null);
  let title3 = useRef(null);

  let tl3 = new TimelineLite();


  useEffect(() => {
    
    

      tl3.to(title3, {
        color: "pink",
        marginTop: "0px",
        duration: ".5",
        delay: 0,
      })
      .to(para3, {
      
        color: "grey",
        duration: ".7",
        opacity: "1",
        delay: 0,
      })
      .to(title3, {
        x:"120px"
      })

    

     
     

 
    tl3.pause();
    

   
    card3.addEventListener("mouseenter", () => {
      tl3.play();
    });
    card3.addEventListener("mouseleave", () => {
      tl3.reverse();
    });
   
  });

  return (
    <>
     
          <div >
            
            
          </div>
          <div  ref={(el) => (card3 = el)}>
            <h1 ref={(el) => (title3 = el)}>project 1:name of the project</h1>
            <p ref={(el) => (para3 = el)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              fugit aspernatur sapiente non? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Possimus tenetur corrupti, libero
              mollitia alias id, perspiciatis deserunt veniam eius quasi
              temporibus culpa ab.
            </p>
          </div>
         
       
     
    </>


 
    )
}

export default Component3
