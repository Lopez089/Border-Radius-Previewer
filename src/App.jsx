import React, { useState } from 'react'
import { useBorderRadius } from './hooks/useBorderRadius'
import { handleSubmit, handleCopy } from './utils/index'
import {
  Layout,
  Square,
  OutlineSquare,
  WrapeerSquare,
  P,
  WrapLetter,
  Letter,
  InputGroup,
  Form,
  WrapInput,
  Input,
  Button
} from './components/index'

const App = () => {
  const [border, setBorder] = useBorderRadius()
  const [message, setMessage] = useState('')

  return (
    <Layout>
      <WrapeerSquare>
        <WrapLetter horizontalTop>
          <Letter bottom w={`${border[0]}%`} color='#de36c0'><P color='#de36c0'>a</P></Letter>
          <Letter bottom w={`${border[1]}%`} color='#9536de'><P color='#9536de'>b</P></Letter>
        </WrapLetter>
        <WrapLetter verticalLeft>
          <Letter right w={`${border[0]}%`} color='#de36c0'><P color='#de36c0'>a</P></Letter>
          <Letter right w={`${border[3]}%`} color='#36afde'><P color='#36afde'>d</P></Letter>
        </WrapLetter>
        <OutlineSquare />
        <Square border={border} >
          <P color='#9536de'>{message}</P>
        </Square>
        <WrapLetter verticalRight>
          <Letter left w={`${border[1]}%`} color='#9536de'><P color='#9536de'>b</P></Letter>
          <Letter left w={`${border[2]}%`} color='#deb536'><P color='#deb536'>c</P></Letter>
        </WrapLetter>
        <WrapLetter horizontalBotton>
          <Letter top w={`${border[3]}%`} color='#36afde'><P color='#36afde'>d</P></Letter>
          <Letter top w={`${border[2]}%`} color='#deb536'><P color='#deb536'>c</P></Letter>
        </WrapLetter>
      </WrapeerSquare>
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
