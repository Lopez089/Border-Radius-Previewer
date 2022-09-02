import React, { useState } from 'react'
import styled from 'styled-components'
import { useBorderRadius } from './hooks/useBorderRadius'
import {
  Layout,
  Square,
  OutlineSquare,
  WrapeerSquare,
  P,
  WrapLetter,
  Letter
} from './components/index'

const ATop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 2;
  grid-row: 1;
`
const ALeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 1;
  grid-row: 2;
`
const BTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 3 / 3;
  grid-row: 1;
`

const BRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 4 / 4;
  grid-row: 2;
`

const DLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 1;
  grid-row: 3;
`
const DButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 2;
  grid-row: 4;
`

const CRight = styled.div`
  color:#36afde;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 4/ 4;
  grid-row: 3;
`

const CButton = styled.div`
  color:#36afde;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 3/ 3;
  grid-row: 4;
`
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`
const Form = styled.form`
  display: flex;
  gap:1rem;
  color: #c3c3c3;
  font-size:1.2rem;
`
const WrapInput = styled.div`
  display:flex;
  align-items:center;
`
const Input = styled.input`
  text-align: right;
  width: 21px;
  border: none ;
  outline: none;
  font-family: 'Open Sans', sans-serif;
  color: #c3c3c3;
  font-size:1.2rem;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`
const Button = styled.button`
  font-family: 'Open Sans', sans-serif;
  color:white;
  background-color:#36AFDE;
  border-radius: .5rem;
  border:1px solid #8BC6EC;
  padding:.5rem 2rem;
  display:grid;
  `

const App = () => {
  const [border, setBorder] = useBorderRadius()
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    const name = e.target.name
    const value = e.target.value

    const obj = {
      a: border[0],
      b: border[1],
      c: border[2],
      d: border[3]
    }

    const newObj = { ...obj, [name]: Number(value) }
    const arr = [newObj.a, newObj.b, newObj.c, newObj.d]
    localStorage.setItem('borderRadius', JSON.stringify(arr))
    setBorder(arr)
  }

  const handleCopy = () => {
    const css = `border-radius:${border.toString().replaceAll(',', '% ').concat('%')};`
    // css.select();
    // copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(css)
    setMessage('Css Copiado!!!')
    setTimeout(() => setMessage(''), 3000)
  }

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
            <Input type="number" name='a' value={border[0]} onChange={(e) => handleSubmit(e)} max='99' min='0' />
            <p>%</p>
          </WrapInput>
          <P color='#de36c0'>
            <label htmlFor='a'>a</label>
          </P>
        </InputGroup>
        <InputGroup>
          <WrapInput>
            <Input type="number" name='b' value={border[1]} onChange={(e) => handleSubmit(e)} max='99' min='0' />
            <p>%</p>
          </WrapInput>
          <P color='#9536de'>
            <label htmlFor='b'>b</label>
          </P>
        </InputGroup>
        <InputGroup>
          <WrapInput>
            <Input type="number" name='c' value={border[2]} onChange={(e) => handleSubmit(e)} max='99' min='0' />
            <p>%</p>
          </WrapInput>
          <P color='#deb536'>
            <label htmlFor='c'>c</label>
          </P>
        </InputGroup>
        <InputGroup>
          <WrapInput>
            <Input type="number" name='d' value={border[3]} onChange={(e) => handleSubmit(e)} max='99' min='0' />
            <p>%</p>
          </WrapInput>
          <P color='#36afde'>
            <label htmlFor='d'>d</label>
          </P>
        </InputGroup>
      </Form>
      <Button onClick={() => handleCopy()}>Copiar</Button>
    </Layout>
  )
}

export default App
