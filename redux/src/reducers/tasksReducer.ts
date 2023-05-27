import {v1} from "uuid"

type InitialType = {
    [key: string]: TaskType[]
}

type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

let initialState: InitialType = {
    ['todolistID1']: [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ],
    ['todolistID2']: [
        {id: v1(), title: "HTML&CSS2", isDone: true},
        {id: v1(), title: "JS2", isDone: true},
        {id: v1(), title: "ReactJS2", isDone: false},
        {id: v1(), title: "Rest API2", isDone: false},
        {id: v1(), title: "GraphQL2", isDone: false},
    ]
}

export const tasksReducer = (state = initialState, action: addTaskTypeAC): InitialType => {
    switch (action.type) {
        case 'ADD-TASK': {
            const newTasks = {id: v1(), title: "newTask", isDone: false}
            return {
                ...state,
                [action.payload.id]: [...state[action.payload.id], newTasks]
            }
        }
        default:
            return state
    }
}

type addTaskTypeAC = ReturnType<typeof addTaskAC>

export const addTaskAC = (id: string) => {
    return {
        type: "ADD-TASK",
        payload: {id}
    } as const
}