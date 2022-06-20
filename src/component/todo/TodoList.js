import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todos,removeTodo,changeComplete}) => {

    return (
        <div>
            <h3>Todo List</h3>
            <ul>
                {todos.map(todo =>
                    <TodoItem key={todo.tno}{...todo}
                              removeTodo={removeTodo}
                              changeComplete={changeComplete}></TodoItem>)}
            </ul>
        </div>
    );
};

export default TodoList;
