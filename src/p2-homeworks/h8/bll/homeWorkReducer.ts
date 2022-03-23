import {UserType} from "../HW8";

export const homeWorkReducer = (
    state: UserType[],
    action: homeWorkReducerType
): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return [...state.sort((a, b) => {
                return action.payload === 'up' ? a.name < b.name ? -1 : 1 : a.name > b.name ? -1 : 1
            })]
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}

type homeWorkReducerType = SortPeopleACType | CheckPeopleACType

type SortPeopleACType = {
    type: 'sort' | 'check'
    payload: 'up' | 'down'
}

type CheckPeopleACType = {
    type: 'check'
    payload: number
}
