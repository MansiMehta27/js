import React, { useState } from 'react';

function Cityfun({famplc}) {
    // const [City,setCity]=useState('Vadodara');
    // const [gst,setgst]=useState(12);
    // const ChangeCity=()=>{
    //     // setCity('Hydrabad')
    // }


  return (
        <div>
                    {/* <p>City:[Function based component]:{City}</p>
                    <button onClick={()=>ChangeCity()}>Change</button> */}

                    {/* <p>gst:{gst}</p>
                    <button onClick={()=>setgst(17)}>ChangeCity</button> */}
            {
                    famplc==='india'?<p>tajmahal</p>:<p>landon</p>
            }

        </div>
    );
}

export default Cityfun;