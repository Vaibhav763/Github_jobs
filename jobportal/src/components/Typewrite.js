import Typewriter from "typewriter-effect";
import React from 'react';
const Typewrite = () => {
    return (  
        <div>
            <h2 className="type"> Get Your Dream Job In: 
                <span className="badge badge-dark">
                <Typewriter
                options={{
                    strings: ['Software', 'Marketing','Education', 'Accounting','IT Sector'],
                    autoStart: true,
                    loop: true,
                }}
                />
                </span>
            </h2>
        </div>
    );
}
 
export default Typewrite;