import React, {useState} from 'react';

const TodoItem = ({tno,title,complete,removeTodo,changeComplete}) => {

    const [checked,setChecked] = useState(complete)

    const changeCheck = (event) =>{
        const target = event.target
        setChecked(target.checked)
        changeComplete(tno,target.checked)
    }
    return (
        <li>
            <input type='checkbox' checked={checked} onChange={(event)=>changeCheck(event)}/>
                {title}<button onClick={(event)=>{removeTodo(tno)}}>DELETE</button>
        </li>
    );
};

export default TodoItem;
