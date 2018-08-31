import React from 'react';
import './MiddleContainer.css'
const middleContainer=(props)=>(
    <div id='middleContainer'>
        {props.children}
    </div>
);

export default middleContainer;