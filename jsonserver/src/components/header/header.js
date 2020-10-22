import React from 'react';
import "./header.css";


function Header() {
    const json = '{Json}'
    return (
        <>
            <nav className="navbar navColor">
                <h3 class>{json} Data</h3>
                <h5><a className='github' href="https://github.com/devil-cyber/JsonData">Github</a></h5>
                <h5><a className='document' href="">Document</a></h5>
            </nav>
        </>
    );
}


export default Header;