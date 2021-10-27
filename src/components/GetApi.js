import axios from 'axios';
import React, { useEffect,useState } from 'react'

const GetApi = () => {

    const[posts,setPosts]=useState('');
const c = 8;
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            console.log(response.data)
            setPosts(response.data)
        })
        .catch(err=>console.log(err))
    },[])
    return (
        <div>
         {/* {posts.map()} */}
         {c ==7 ? 'true':'false'}
         <h4>{c}</h4>
         {console.log(posts)}
            {
                posts
            // posts.map(data =>(
            //     <>
            //     <p>{data.userId}</p>
            //     <p>{data.title}</p>
            //     </>    
            // ))
            }
        </div>
    )
}

export default GetApi
