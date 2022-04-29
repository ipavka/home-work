import React from 'react';
import {Request} from "./Request/Request";
import s from "./Request/Request.module.css";

function HW13 () {
    return (
        <div className={s.mainBlock}>
            <h2 style={{color: '#ff0b0b', margin: '5px'}}>homeworks 13</h2>
            <Request/>
        </div>
    );
}

export default HW13;