import React, { useState } from 'react';

function Cityfun(props) {
    const [City,setCity]=useState('Vadodara');
    const [gst,setgst]=useState(12);
    const ChangeCity=()=>{
        setCity('Hydrabad')
    }


  return (
        <div>
                    <p>City:[Function based component]:{City}</p>
                    <button onClick={()=>ChangeCity()}>Change</button>

                    <p>gst:{gst}</p>
                    <button onClick={()=>setgst(17)}>ChangeCity</button>


        </div>
    );
}

export default Cityfun;