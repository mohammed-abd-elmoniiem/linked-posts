import { useLayoutEffect, useRef, useState } from "react";
import Cloud from "./Cloud";
import FallStar from "./FallStar";
import Star from "./Star";


export default function Svg(){

    const PointStars = []

    for(let i = 0 ; i<100 ;i++){
        PointStars.push({x:Math.random()*98 , y:Math.random()*100})
    }
    const svgRef = useRef(0)

    let [svgWidth,setSvgWidth] = useState(200);
    let [svgHeight , setSvgHeight] =  useState(200);


    useLayoutEffect(()=>{

        setSvgWidth(svgRef.current.clientWidth) ;
        setSvgHeight(svgRef.current.clientHeight)
      

        console.log(svgHeight)


        

    })

    function normX(x){return (x/100) * svgWidth}
    function normY(y){return (y/100)* svgHeight}




    return(
       <svg  ref={svgRef} className=" h-full w-full ">

                    

                    <FallStar  x={normX(50)} y={normY(10)}  w={1.5} rad={7} />
                    <FallStar  x={normX(10)} y={normY(20)}  w={2} rad={6} />
                    <FallStar  x={normX(80)} y={normY(12)}  w={2} rad={8} />
                    <FallStar  x={normX(40)} y={normY(18)}  w={1} rad={7} />
                    <FallStar  x={normX(90)} y={normY(17)}  w={2} rad={5} />


                    {PointStars.map(({x,y})=><Star rad={Math.random()*1} X ={normX(x)} Y={normY(y)}/>)}


                 






                 

                  




                   

                    {/* <circle cx={normX(80)} cy={normY(35)} r={70} fill="url(#rgb) "></circle> */}




                    <defs>
                        <linearGradient id="rgb" x1={'0%'} x2={'20%'} y1={'0%'} y2={'80%'}>
                            <stop offset={'0%'} stopColor="#fff"/>
                            <stop offset={'50%'} stopColor="#fff"/>
                            <stop offset={'100%'} stopColor="#915fff"/>

                        </linearGradient>

                        <radialGradient id="rgb-rad" x1={'0%'} x2={'100%'} y1={'0%'} y2={'0%'} >

                             <stop offset={'0%'} stopColor="#00ff44"/>
                            <stop offset={'50%'} stopColor="#55ff44"/>
                            <stop offset={'100%'} stopColor="#000044"/>

                        </radialGradient>

                          <radialGradient id="star-center">
                 <stop stopColor="white" offset={'0%'} />
                 <stop stopColor="white" offset={'20%'} />

                <stop stopColor="#ffffff00" offset={'100%'} />

            </radialGradient>
                    </defs>

                </svg>
    )
}