


export default function Cloud({x,y}){

    const points=[];

    const controls = [10,-50,50,-50]

    const count=5
    for(let i =1 ; i<= count;i++){

        if(i != count){
        points.push(` c${ controls[0] } ${ controls[1]}  ${ controls[2]} ${ controls[3]} ${Math.random() * 50+30} ${-10 } `)


        }else{
               points.push(` ${ controls[0] } ${ controls[1]}  ${ controls[2]} ${ controls[3]} ${50} ${0 } `)


        }


    }



    return(
        <path
         stroke="green"
         strokeWidth={3}
        d={`M${x} ${y} ${points.join(' ')} Z` }
        
        
        />
    )
}