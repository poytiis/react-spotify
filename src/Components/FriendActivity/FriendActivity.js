import React from 'react';
import './FriendActivity.css';
import Button from '../Button/Button';

const friendActivity=()=>{

    const style={
        fontSize:'11px',
        padding:'8px 22px',
        marginTop: '40px'
    };
    return (
        <div id='FriendActivity'>
            <h1> Friend Activity</h1>
            <hr/>
            <Button bg='#1C1C1C' color='grey' stylee={style}>  Find friends</Button>

        </div>
    );
};

export default friendActivity;