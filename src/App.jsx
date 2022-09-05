import React, { useState } from 'react'
import { useBorderRadius } from './hooks/useBorderRadius'
import {
  Layout,
  BoxSquare,
  WrapFrom,
  Footer,
  Main
} from './components/index'

const App = () => {
  const [border, setBorder] = useBorderRadius()
  const [message, setMessage] = useState('')

  return (
    <Layout>
      <nav>hola soy el menu</nav>
      <Main>
        <BoxSquare border={border} message={message} />
        <WrapFrom border={border} setBorder={setBorder} setMessage={setMessage} />
      </Main>
      <Footer>
        by  <a href="https://www.linkedin.com/in/juanlopezaragon/" target="_blank" rel="noreferrer" > Juan López</a> | 2022
      </Footer>
    </Layout>
  )
}

export default App
