import React from 'react';
import './App.css';
import {useAppSelector} from "./hooks/hooks";
import {Todos} from "./Todos";

function App() {
    const todos = useAppSelector(state => state.todos)

    return (
        <div>
            {todos.map(el => {
                return (
                    <Todos
                        key={el.id}
                        todolistID={el.id}
                        title={el.title}
                        filter={el.filter}
                    />
                )
            })}
        </div>
    );
}

export default App;
