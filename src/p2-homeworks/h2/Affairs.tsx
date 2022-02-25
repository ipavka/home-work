import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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
            <SuperButton onClick={() => {
                setAll('all')
            }}>
                All
            </SuperButton>

            <SuperButton onClick={() => {
                setHigh('high')
            }}>
                High
            </SuperButton>

            <SuperButton onClick={() => {
                setMiddle('middle')
            }}>
                Middle
            </SuperButton>

            <SuperButton onClick={() => {
                setLow('low')
            }}>
                Low
            </SuperButton>
        </div>
    )
}

export default Affairs
