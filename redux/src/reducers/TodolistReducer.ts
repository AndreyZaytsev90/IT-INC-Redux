type InitialType = {
    id: string,
    title: string,
    filter: string
}

let initialState: InitialType[] = [
    {id: 'todolistID1', title: 'What to learn', filter: 'all'},
    {id: 'todolistID2', title: 'What to buy', filter: 'all'},
]

export const todolistReducer = (state = initialState, action: any): InitialType[] => {
    switch (action.type) {
        case "XXX": {
            return state
        }
        default:
            return state
    }
}