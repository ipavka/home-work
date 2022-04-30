import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Request.module.css'
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import {requestAPI, ResponseType} from "./api/requestsAPI";

export const Request = () => {

    const [info, setInfo] = useState<any>(null)
    const [post, setPost] = useState(true)
    const [check, setCheck] = useState(true)
    const [button, setButton] = useState(true)

    useEffect(() => {
        button ? requestAPI.getRequestFetch(post).then((res: ResponseType) => { // через Fetch
            setInfo(res);
        }) : requestAPI.getRequestAxios(post).then((res: ResponseType) => { // через Fetch
            setInfo(res);
        })

    }, [post])

    const clickHandler = () => {
        setButton(true);
        setPost(check);
    }
    const axiosClickHandler = () => {
        setButton(false);
        setPost(check);
    }

    return (
        <div className={s.itemsBlock}>

            <div className={s.infoBlock}>
                <div><p>errorText:</p> {info?.errorText}</div>
                <div><p>info:</p> {info?.info}</div>
            </div>

            <div className={s.items}>
                <SuperCheckbox checked={check} onChangeChecked={setCheck}/>
                <SuperButton onClick={clickHandler}>
                    Fetch
                </SuperButton>
                <SuperButton onClick={axiosClickHandler}>
                    Axios
                </SuperButton>
            </div>

        </div>
    );
};
