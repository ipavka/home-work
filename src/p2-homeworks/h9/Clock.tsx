import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

type SelectButtonType = 'start' | 'stop'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)
    const [clicked, setClicked] = useState<SelectButtonType>('stop') // button selection

    const stop = () => {
        setClicked('stop')
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
        setClicked('start')
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = `${date.toLocaleTimeString()}`
    const stringDate = `${date.toLocaleDateString()}`
    const clickedStart = `${clicked === 'start' ? s.buttonOn : ''}`
    const clickedStop = `${clicked === 'stop' ? s.buttonOn : ''}`

    return (
        <div className={s.mainBlock}>
            <div className={s.timeBlock}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>
            <div className={s.buttonBlock}>
                <SuperButton className={clickedStart} onClick={start}>start</SuperButton>
                <SuperButton className={clickedStop} onClick={stop}>stop</SuperButton>
            </div>


        </div>
    )
}

export default Clock
