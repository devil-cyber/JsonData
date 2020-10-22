import React from 'react';
import './body.css';


function Body() {
    const json = "{JSON}";
    return (
        <><div className='bodyDiv1'>
            <h1 className='textColor1'>Fake {json} Data</h1>
            <h5 className='textColor2'>Free to use fake Online REST API for testing and prototyping</h5>
            <h5 className='textColor3'>Run this code here, in a console or from any site:</h5>
        </div>
        </>
    );
}

export default Body;