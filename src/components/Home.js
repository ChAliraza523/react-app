import React, { useEffect,useState } from 'react'
import { useHistory } from 'react-router'
import Text from './Text';
import Button from './Button';
import axios from 'axios';

const Home = () => {
    const history=useHistory();
    //const [post, setPost] = useState([])
    
    
    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts").then(   (response)=>{
    //         setPost(response.data)


    //     });
    // },[])
    return (
        <div>
        {/* {console.log(post,'sfsfdf')} */}
            <h1>this is home page</h1>
            <button onClick={()=>history.push('./about')}>change route</button>
            <Text
            first={"talha"}
            last={"khalil"}
            kk={"KKLL"}
            >
                aLIALIA
            </Text>
            <Button value={"home"}/>
        </div>
    )
}

export default Home
