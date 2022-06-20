import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {Button} from "react-bootstrap";

const PostList = ({flag}) => {

    const [posts,setPosts] = useState([])
    const [change,setChange] =useState(false)
    useEffect(()=>{
        console.log("PostList ......UseEffect")
        ajaxList().then(data =>{
            setPosts(data)
        })
    },[flag,change])
    const list = posts.map(({id,title,author})=> <li key={id}> {id}----{title}---{author}
        <Button onClick={()=>{clickDelete(id)}} variant='danger' size='sm'>x</Button></li>)

    const ajaxList = async () =>{
        const res = await  axios.get('http://localhost/posts')
        const data = res.data
        return data
    }

    const ajaxDelete = async (id)=>{
            const res = await axios.delete(`http://localhost/posts/${id}`)
        return res.data
    }

    const clickDelete = useCallback( (id) =>{
        ajaxDelete(id).then(()=>{
            console.log('deleted')
        setChange(!change)
        })
    })
    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default PostList;