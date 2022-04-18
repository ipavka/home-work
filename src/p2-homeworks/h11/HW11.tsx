import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {SuperDoubleRange} from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'


function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (<>
        <hr/>
        <h2 style={{color: '#ff0b0b', margin: '5px'}}>homeworks 11</h2>

        <div className={s.mainBlock}>
            <div>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                    min={0}
                    max={100}
                />
            </div>

            <div>
                <SuperDoubleRange min={0}
                                  max={100}
                                  value1={value1}
                                  value2={value2}
                                  setValue2={setValue2}
                                  setValue1={setValue1}/>
            </div>
        </div>
        <hr/>
        {/*для личного творчества, могу проверить*/}
        {/*<AlternativeSuperRange/>*/}
        {/*<AlternativeSuperDoubleRange/>*/}
        <hr/>
    </>)
}

export default HW11
