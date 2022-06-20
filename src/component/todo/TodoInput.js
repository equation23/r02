import React, {useState} from 'react';

const TodoInput = ({addTodo}) => {
    const [title,setTitle] = useState('')
    const sendTodo = () => {
        if (title ===''){
            alert("제목을 입력하세요")
            return
        }
        addTodo(title)
        setTitle('')
    }
    return (
        <div>
            <h2>Todo Input</h2>
            <input type='text' value={title} onChange={(event)=>{setTitle(event.target.value)}}/>
            <div>
                <button onClick={(event)=>sendTodo()} >ADD</button>
            </div>
            <hr/>
        </div>
    );
};

export default TodoInput;
