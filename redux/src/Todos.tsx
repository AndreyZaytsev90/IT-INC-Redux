import React from 'react';
import {Button} from "./components/Button";
import {useAppSelector} from "./hooks/hooks";
import {useDispatch} from "react-redux";
import {addTaskAC} from "./reducers/tasksReducer";

type PropsType = {
    todolistID: string
    title: string
    filter: string
}

export const Todos: React.FC<PropsType> = (props) => {

    const {todolistID, title, filter} = props

    const tasks = useAppSelector(state => state.tasks[todolistID])

    const dispatch = useDispatch()

    const taskBlock = tasks.map(el => {
        return (
            <li>
                <input type="checkbox" checked={el.isDone}/>
                <span>-{el.id}-</span>
                <span style={{color: 'red'}}>-{el.title}-</span>
            </li>
        )
    })

    const addTaskHandler = () => {
        dispatch(addTaskAC(todolistID))
    }

    return (
        <div style={{padding: '10px'}}>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button name={'+'} callBack={addTaskHandler}/>
            </div>
            <ul>
                {taskBlock}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
        ;
};

