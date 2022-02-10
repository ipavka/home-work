import React from 'react'
import {AffairType} from "./HW2";
import affairStyle from './Affairs.module.css'


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id)
    }// need to fix

    return (
        <div className={affairStyle.item_text}>
            <span>{props.affair.name}</span>
            <span className={affairStyle.priority}>{props.affair.priority}</span>
            <button onClick={() => {
                deleteCallback(props.affair._id)
            }}>delete
            </button>
        </div>
    )
}

export default Affair
