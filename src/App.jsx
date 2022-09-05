import React, { useState } from 'react'
import { useBorderRadius } from './hooks/useBorderRadius'
import {
  Layout,
  BoxSquare,
  WrapFrom,
  Footer
} from './components/index'

const App = () => {
  const [border, setBorder] = useBorderRadius()
  const [message, setMessage] = useState('')

  return (
    <Layout>
      <BoxSquare border={border} message={message} />
      <WrapFrom border={border} setBorder={setBorder} setMessage={setMessage} />
      <Footer>
        by <a href="https://www.linkedin.com/in/juanlopezaragon/" target="_blank" rel="noreferrer" >Juan López</a> | 2022
      </Footer>
    </Layout>
  )
}

export default App
