import React from 'react'
import Button from './Button'

const ProductItem = () => {
    const data = [
        {
            name:'ali',
            age:12,
            prof:'che'
        },
        {
            name:'adnan',
            age:21,
            prof:'ph'
        },
        {
            name:'talha',
            age:32,
            prof:'ch'
        },
        {
            name:'jka',
            age:21,
            prof:'cxc'
        }
    ]
    const arr = [21,3,1,44,11,323,21,3,11,22]
    return (
        <div>
            <h1>this is product item </h1>
            {/* <p>{arr.map(data =>(
             <p>{data}</p>
                ))}</p> */}
                {
                    data.map(d => (
                        <>
                        <p>{d.name}</p>
                        <p>{d.age}</p>
                        <p>{d.prof}</p>
                        <p>.........</p>
                        </>
                    ))
                }
            {console.log(data)}
        </div>
    )
}

export default ProductItem
