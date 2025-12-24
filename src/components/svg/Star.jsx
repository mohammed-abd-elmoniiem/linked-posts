import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";





export default function Star({rad , X,Y}){


      gsap.registerEffect(useGSAP)

             const Points =[];
    
             const phase = 0.045;
       
    
            for(let i = 0 ; i<5 ;i++){
              
                Points.push({x:rad*2*Math.cos((i/5 - 0.1 +phase )*2*Math.PI  ), y:rad*2*Math.sin((i/5 - 0.1  +phase)*2*Math.PI )})
                Points.push({x:rad*Math.cos((i/5  + phase)*2*Math.PI ), y:rad*Math.sin((i/5 +phase )*2*Math.PI )})
    
            }

    
            const D =  `M${X+Points[0].x} ${Y+Points[0].y} ${Points.map( ({x,y})=>`L${X+x} ${Y+y}` ).join(' ')} z`;




            // animation
            const starRef = useRef()



    return(
        <>

        <path ref={starRef}  d={D} fill="url(#star-center)" strokeWidth='3' strokeLinejoin="round"  stroke="#ffffff22"/>
        
        </>
    )
}