import React, { useState,useEffect } from 'react'
const Basics = () => {
  const[count,setCount]=useState(0);
 useEffect(()=>{
   setTimeout(() => {
    setCount(count+1)
     
   }, 1000);
 },[count])
  return (
    <div>
{count}
    </div>
  )
}

export default Basics
