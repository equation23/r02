import React, {useEffect, useState} from 'react';
import axios from "axios";

const getMovie =  async() =>{

    console.log('getMovie')

    const res = await axios.get("https://swapi.dev/api/films/2/")

    console.log(res)

    return res.data
}


const Test1 = () => {
    console.log(("test1"))
    // const getAjaxData =()=>{
    //     getMovie().then(info=>{
    //         const text =info.opening_crawl
    //         console.log(text)
    //         setContent(text)
    //     })
    // }
const [content,setContent] = useState('')

    useEffect(()=>{
        getMovie().then(info=>{
            const text =info.opening_crawl
            console.log(text)
            setContent(text)
        })
    },[])

    return (
        <div>
            <h1>getMovie</h1>
            {/*<button onClick={()=>getAjaxData()}>Click</button>*/}
            <pre>{content}</pre>
        </div>
    );
};

export default Test1;