import React, { useEffect,useState } from 'react'
import { useHistory } from 'react-router'
import Text from './Text';
import Button from './Button';

const Home = () => {
    const history=useHistory();
    const [state, setState] = useState('')
    
    useEffect(()=>{
        setTimeout(() => {
            // history.push('./about')
        }, 1000);
    },[])
    return (
        <div>
            {state}
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
