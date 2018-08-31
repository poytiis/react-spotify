import React from 'react';
import './TextDecoration.css'
const textDecoration=(props)=>(
    <div className='textDecoration' style={{width:props.width}}>
        <hr/>
        <p>{props.children}</p>
        <hr/>
    </div>
);

export default textDecoration;