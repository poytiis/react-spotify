import React from 'react';
import Button from '../../Components/Button/Button';
import './LocalFiles.css';

const localFiles= ()=> {

    const style={
        color: 'white',
        backgroundColor:'black',


    };

    return(
        <div id='localFiles'>
            <p> You can play local music by adding them on setting page</p>

            <Button stylee={style}>To settings</Button>
        </div>
        )

};



export  default  localFiles;