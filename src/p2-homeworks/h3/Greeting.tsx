import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'


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

    const inputClass = error.length > 1 ? s.error : '' // need to fix with (?:)
    const buttonClass = error.length > 1 ? s.disable : ''
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {  // решил тут оставить
        if (event.key === 'Enter') addUser();
    }

    return (
        <div className={s.mainHM3}>
            <input onKeyPress={onKeyPressHandler} value={name} onChange={setNameCallback} className={inputClass}/>
            <span className={s.errorText}>{error}</span>
            <button className={buttonClass} onClick={addUser}>add</button>
            <span className={s.counter}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
