import React, { useEffect, useState } from 'react';

function Timefun(props) {
    const [time,setTime]=useState(new Date());

    const tick=()=>{
        setTime(new Date())
    }

    useEffect(
        ()=>{
            //componetDidmount ,componetDidupdate
                const timeId= setInterval(()=>tick(),1000); 
                return()=>{
                    //Componetwillunmount
                     clearInterval(timeId);
                }       
        },
    [time]);

    return (
        <div>
            {
               time.toLocaleTimeString()
            }
                
        </div>
    );
}

export default Timefun;