const initState = {
    isLoading: false
}
type InitialStateType = typeof initState
export const loadingReducer = (state: InitialStateType = initState, action: LoadingACType): InitialStateType => { // fix any
    switch (action.type) {
        case 'TOGGLE_LOADING': {
            return {...state, isLoading: action.value}
        }
        default:
            return state
    }
}


type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (value: boolean) => ({type: "TOGGLE_LOADING", value} as const)