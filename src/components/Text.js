import React from 'react'

const Text = ({first,last,children,k,...rest}) => {
    return (
        <>
          {first + last}
          {children} 
        </>
    )
}

export default Text
