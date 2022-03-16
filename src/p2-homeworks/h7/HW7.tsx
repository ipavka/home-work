import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'

const arr = ['HTML', 'CSS', 'React']

function HW7() {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div style={{margin: '10px'}}>
            <hr/>
            <h2 style={{color: '#ff0b0b', margin: '5px'}}>homeworks 7</h2>

            {/*should work (должно работать)*/}
            <div style={{margin: '10px'}}>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div style={{margin: '10px'}}>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    )
}

export default HW7
