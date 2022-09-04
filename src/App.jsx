import React, { useState } from 'react'
import { useBorderRadius } from './hooks/useBorderRadius'
import {
  Layout,
  BoxSquare,
  WrapFrom
} from './components/index'

const App = () => {
  const [border, setBorder] = useBorderRadius()
  const [message, setMessage] = useState('')

  return (
    <Layout>
      <BoxSquare border={border} message={message} />
      <WrapFrom border={border} setBorder={setBorder} setMessage={setMessage} />
    </Layout>
  )
}

export default App
