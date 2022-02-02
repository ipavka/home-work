import React from 'react'
import MeStyle from './Message.module.css';


type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageType) {
    return (
        <div className={MeStyle.message}>
            <div className={MeStyle.comment}>
                <div className={MeStyle.avatar}>
                    <img src={props.avatar} alt="avatar"/>
                </div>

                <div className={MeStyle.comment_bubble}>
                    <h5>{props.name}</h5>
                    <p>{props.message}</p>
                    <div className={MeStyle.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message;


