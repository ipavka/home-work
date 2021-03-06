import React, {useState} from 'react'
import Affairs from './Affairs'
import affairStyle from './Affairs.module.css'

// types
export type AffairPriorityType = 'low' | 'middle' | 'high'  // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
    if (filter === 'all') {
        return affairs
    } else if (filter === 'low') {
        return affairs.filter((el) => {
            return el.priority === filter
        })
    } else if (filter === 'middle') {
        return affairs.filter((el) => {
            return el.priority === filter
        })
    } else {
        return affairs.filter((el) => {
            return el.priority === filter
        })
    }

}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any
    return affairs.filter((el) => {
        return el._id !== _id
    })
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')


    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => { // need to fix any
        setAffairs(deleteAffair(affairs, _id))
    }

    return (
        <div className={affairStyle.someClass}>
            <hr/>
            <h2 style={{color: '#ff0b0b', margin: '5px'}}>homeworks 2</h2>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
