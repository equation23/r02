import React from 'react';
import axios from "axios";

const PostInput = ({requestRender}) => {
    const clickAdd =() =>{
        const obj = {title:'Test.....',author:'tester'}
        postAjax(obj).then(()=>{requestRender()})

    }

    return (
        <div>
            <div>
            <button onClick={()=>clickAdd()}>ADD POST</button>
            </div>
        </div>
    );
};

const postAjax = async(postObj) => {
  const res =await  axios.post('http://localhost/posts/',postObj)

    const data =res.data
    console.log(data)
    return data
}

export default PostInput;