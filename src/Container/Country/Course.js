import React from 'react';

function Course({Chancec}) {
   
    if (Chancec === 'RNW1') 
    {
      return 'Android';       
    }
    
    else {
      return 'Node js';
    }

    return (
        <>
        <div>
            {
                 
                Chancec === 'RNW1'?<p>Course Name :Android</p>:<p>Course Name :NodeJs</p>

            
            }
        </div>
        </>
    );
}

export default Course;