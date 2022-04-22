
const initState = {
    themeColor: 'dark'
};
export type ColorThemType = 'red' | 'dark' | 'white' | 'yellow'
type InitialStateType = typeof initState
export const themeReducer = (state:InitialStateType = initState, action: changeThemeType): InitialStateType => {
    switch (action.type) {
        case "SET_COLOR": {
            return {...state,
                themeColor: action.color
            }
        }
        default: return state;
    }
};
type changeThemeType = ReturnType<typeof changeThemeC>
export const changeThemeC = (color: ColorThemType): any => ({type: "SET_COLOR", color} as const);