import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ColorThemType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'yellow'];

function HW12() {
    const dispatch = useDispatch()
    const theme = useSelector<AppStoreType, ColorThemType>(state => state.theme.themeColor as ColorThemType);

    const onChangeCallback = (value: ColorThemType) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s.mainBlock}>
            <h2 style={{color: '#ff0b0b', margin: '5px'}}>homeworks 12</h2>
            <div className={`${s.item} ${s[theme]}`}>
                <div className={s[theme + 'Text']}>
                    <h1>{theme}</h1>
                </div>

            </div>
            <div className={s.radioContainer}>
                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                />
            </div>
        </div>

    );
}

export default HW12;
