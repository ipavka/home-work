import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {  // решил тут оставить
        if (event.key === 'Enter') addUser();
    }

    return (
        <div className={s.mainHM3}>
            <SuperInputText value={name} onChange={setNameCallback} error={error} onKeyPress={onKeyPressHandler}/>
            <SuperButton onClick={addUser} disabled={error.length !== 0} className={s.customButton}>
                add
            </SuperButton>
            <span className={s.counter}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
