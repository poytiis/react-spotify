import React from 'react';
import bg from '../../Assets/Pictures/background.jpg';

const backGroundIm=(props)=>{
    const background={
        backgroundImage:"url("+bg+")",
        width:'100%',
        height:'100%',
        position:'fixed',
        margin:'0',
        padding:'0'
    };
    return <div style={background}>{props.children}</div>;
};

export  default backGroundIm;