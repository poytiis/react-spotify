import React from 'react';
import {Link, NavLink} from 'react-router-dom'

const test= ()=>{

    return(
        <div>
            <Link to='/'> Home</Link>
            <NavLink to='/'> Home</NavLink>
        </div>
    );
};

export default test;