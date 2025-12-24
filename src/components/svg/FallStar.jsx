import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";



export default function FallStar({x,y,w,rad}){

    const points=[];
    

    const controls = [10,-50,50,-50]

    const count=5;
      gsap.registerEffect(useGSAP)
    


       const fallStarRef = useRef()
    
                useGSAP(()=>{
    
                    gsap.to(fallStarRef.current,
                    {
                       
                       

                        
                        transformBox:'fillBox',
                        transformOrigin:'center center',
                        repeat:-1,
                        
                        
                    }
                )

                })
    
   


    return(
        <>

        <g ref={fallStarRef} style={{transformBox:'fill-box',transform:'rotateZ(-45deg)'}}>
                <rect x={x} y={y-0.5*w} height={w} width={100} fill="url(#star-tail)"/>
                 <circle cx={x} cy={y}  fill="url(#star-center)" r={rad}/>
        </g >

      


        <defs >

            <linearGradient id="star-tail"  >

                <stop stopColor="white" offset={'0%'} />
                <stop stopColor="#ffffff00" offset={'90%'} />


            </linearGradient>

          
        </defs>
        
        
        </>
       


    )
}