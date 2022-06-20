import React, {useState} from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import uuid from "react-uuid";

const initState = [
    {tno: uuid(), title: 'Sample..1', complete: false},
    {tno: uuid(), title: 'Sample..2', complete: true},
    {tno: uuid(), title: 'Sample..3', complete: true},
    {tno: uuid(), title: 'Sample..4', complete: false}
]

const TodoWrapper = () => {

    const [todos, setTodos] = useState(initState)


    const addTodo = (title) => {
        const todo = {tno: uuid(), title: title, complete: false}
        setTodos([...todos, todo])
        console.log(todo)
    }

    const removeTodo = (tno) => {
        const result = todos.filter(todo => todo.tno !== tno)
        setTodos(result)
    }
    const changeComplete = (tno, complete) => {
        const target = todos.filter(todo => todo.tno === tno)[0]
        target.complete = complete
        setTodos([...todos])
    }
    return (
        <div>

            <TodoInput addTodo={addTodo}></TodoInput>
            <TodoList todos={todos} removeTodo={removeTodo} changeComplete={changeComplete} ></TodoList>
        </div>
    );
};

export default TodoWrapper;