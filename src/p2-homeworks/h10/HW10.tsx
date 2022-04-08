import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW10.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {

    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading);

    const setLoading = () => {
        dispatch(loadingAC(true));

        setTimeout(() => {
            dispatch(loadingAC(false));
        }, 2000)
    };

    return (
        <div>
            <hr/>
            <h2 style={{color: '#ff0b0b', margin: '5px'}}>homeworks 10</h2>

            {/*should work (должно работать)*/}
            <div className={s.twister}>
                {loading
                    ? (
                        <div className={s.bowl}>
                            <div className={s.bowl_ring}>
                                <div className={s.ball_holder}>
                                    <div className={s.ball}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
