import React from 'react';
import './Button.css';

 const button=(props)=> {
     const style = {
         backgroundColor: props.bg,
         color: props.color,
         ...props.stylee
     };

     return <button className='Button' style={style} onClick={props.click}>{props.children}</button>;
 };


export default button;