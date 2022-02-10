import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import affairStyle from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (title: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
    console.log(mappedAffairs)
    const setAll = (title: FilterType) => {
        props.setFilter(title)
    }
    const setHigh = (title: FilterType) => {
        props.setFilter(title)
    }
    const setMiddle = (title: FilterType) => {
        props.setFilter(title)
    }
    const setLow = (title: FilterType) => {
        props.setFilter(title)
    }

    return (
        <div>
            {mappedAffairs}
            <button className={affairStyle.btn_filter} onClick={() => {
                setAll('all')
            }}>All
            </button>
            <button className={affairStyle.btn_filter} onClick={() => {
                setHigh('high')
            }}>High
            </button>
            <button className={affairStyle.btn_filter} onClick={() => {
                setMiddle('middle')
            }}>Middle
            </button>
            <button className={affairStyle.btn_filter} onClick={() => {
                setLow('low')
            }}>Low
            </button>
        </div>
    )
}

export default Affairs
