import React,{useState} from 'react'

const Message = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>you clicked {count}</h2>
            <button onClick={()=>setCount(count+1)}>click me</button>
        </div>
    )
}

export default Message;
