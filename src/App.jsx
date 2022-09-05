import React, { useState } from 'react'
import { useBorderRadius } from './hooks/useBorderRadius'
import logo from './assets/img/logo.png'
import {
  Layout,
  BoxSquare,
  WrapFrom,
  Footer,
  Main,
  Nav
} from './components/index'

const App = () => {
  const [border, setBorder] = useBorderRadius()
  const [message, setMessage] = useState('')

  return (
    <Layout>
      <Nav>
        <img src={logo} alt="logo" />
      </Nav>
      <Main>
        <BoxSquare border={border} message={message} />
        <WrapFrom border={border} setBorder={setBorder} setMessage={setMessage} />
      </Main>
      <Footer>
        <p>
          by
          <a href="https://www.linkedin.com/in/juanlopezaragon/" target="_blank" rel="noreferrer" >
            Juan López</a> | 2022
        </p>
      </Footer>
    </Layout>
  )
}

export default App
