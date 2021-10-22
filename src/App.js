import React from 'react'
import RouteConfig from './RouteConfig'
import Form from './Form'
import Button from './components/Button'

const App = () => {
  return (
    <div>
      <RouteConfig />
      <Form />
      <Button value={'click'}/>
      <Button value={'click here'}/>
    </div>
  )
}

export default App

