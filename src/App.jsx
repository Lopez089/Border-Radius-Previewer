import React, { useState } from 'react'
import { useBorderRadius } from './hooks/useBorderRadius'
import { handleSubmit, handleCopy } from './utils/index'
import {
  Layout,
  P,
  InputGroup,
  Form,
  WrapInput,
  Input,
  Button,
  BoxSquare
} from './components/index'

const App = () => {
  const [border, setBorder] = useBorderRadius()
  const [message, setMessage] = useState('')

  return (
    <Layout>
      <BoxSquare border={border} message={message} />
      <Form >
        <InputGroup>
          <WrapInput>
            <Input type="number" name='a' value={border[0]} onChange={(e) => handleSubmit(e, border, setBorder)} max='99' min='0' />
            <p>%</p>
          </WrapInput>
          <P color='#de36c0'>
            <label htmlFor='a'>a</label>
          </P>
        </InputGroup>
        <InputGroup>
          <WrapInput>
            <Input type="number" name='b' value={border[1]} onChange={(e) => handleSubmit(e, border, setBorder)} max='99' min='0' />
            <p>%</p>
          </WrapInput>
          <P color='#9536de'>
            <label htmlFor='b'>b</label>
          </P>
        </InputGroup>
        <InputGroup>
          <WrapInput>
            <Input type="number" name='c' value={border[2]} onChange={(e) => handleSubmit(e, border, setBorder)} max='99' min='0' />
            <p>%</p>
          </WrapInput>
          <P color='#deb536'>
            <label htmlFor='c'>c</label>
          </P>
        </InputGroup>
        <InputGroup>
          <WrapInput>
            <Input type="number" name='d' value={border[3]} onChange={(e) => handleSubmit(e, border, setBorder)} max='99' min='0' />
            <p>%</p>
          </WrapInput>
          <P color='#36afde'>
            <label htmlFor='d'>d</label>
          </P>
        </InputGroup>
      </Form>
      <Button onClick={() => handleCopy(border, setMessage)}>Copiar</Button>
    </Layout>
  )
}

export default App
