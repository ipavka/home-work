import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        const defaultState = 'double click to enter text...'
        const state = restoreState<string>('editable-span-value', defaultState)
        setValue(state)
    }
    const divMainStyle = {
        marginLeft: '10px',
        marginBottom: '10px',
    }
    return (
        <div style={divMainStyle}>
            <hr/>
            <h2 style={{color: '#ff0b0b', margin: '5px'}}>homeworks 6</h2>

            {/*should work (должно работать)*/}
            <div style={{height: '30px'}}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'double click to enter text...'}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
