import React, { useState } from 'react';

function Counterfun(props) {

    const [count,setcount]=useState(0)

    const incrementcounter = ()=>{
    
            if(count>=10){

            }
            else{
                 
                setcount(()=>count+1) 

            }


    }
    const decrementcounter = ()=>{
    
        if(count<=1){

        }
        else{
             
            setcount(()=>count-1) 

        }
        

}
    return (
        <div>
            <h2>counter:{count}</h2>
                    <button onClick={()=>incrementcounter()}>plus</button>
                    <button onClick={()=>decrementcounter()}>minus</button>
        </div>
    );
}

export default Counterfun;