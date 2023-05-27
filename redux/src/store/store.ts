import {combineReducers, legacy_createStore as createStore} from "redux";
import {todolistReducer} from "../reducers/TodolistReducer";
import {tasksReducer} from "../reducers/tasksReducer";

const RootReducer = combineReducers({
    todos: todolistReducer,
    tasks: tasksReducer
})

export const store = createStore(RootReducer)

export type RootReducerType = ReturnType<typeof RootReducer>

export type RootState = ReturnType<typeof store.getState>