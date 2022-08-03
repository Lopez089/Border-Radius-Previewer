import { useState } from 'react'
import styled from 'styled-components'
import { Layout } from './components/index'

const inicialState = [10, 10, 10, 10]


const Cuadrado = styled.div`
  grid-column: 2 / 4;
  grid-row: 2/4;
  width:250px;
  height:250px;
  border-radius: ${prop => prop.border.toString().replaceAll(',', '% ').concat('%')};
  background-color: #8BC6EC;
  background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);

`
const OutlineSquare = styled.div`
 grid-column: 2 / 4;
  grid-row: 2/4;
  position:absolute;
  width:248px;
  height:248px;
  border:1px dotted gray;
  z-index:-9999;
`

const WrapeerSquare = styled.div`
  font-weight:bold ;
  position: relative;
  display: grid;
  grid-template-columns: 30px repeat(2, 1fr) 30px;
  grid-template-rows: 30px repeat(2, 1fr) 30px;
`

const P = styled.p`
  color:${prop => prop.color};
`

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
  color:#9536de;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 3 / 3;
  grid-row: 1;
`

const BRight = styled.div`
  color:#9536de;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 4 / 4;
  grid-row: 2;
`

const DLeft = styled.div`
  color:#deb536;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 1;
  grid-row: 3;
`
const DButton = styled.div`
  color:#deb536;
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
  justify-content: space-around;
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

function App() {
  const [border, setBorder] = useState(inicialState)
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
    setBorder(arr)
  }

  const handleCopy = () => {
    const css = `border-radius:${border.toString().replaceAll(',', '% ').concat('%')};`
    console.log("🚀 ~ file: App.jsx ~ line 36 ~ handleCopy ~ css", css)
    //css.select();
    //copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(css)
    setMessage('Copiado!!!')
    setTimeout(() => setMessage(''), 3000)


  }

  return (
    <Layout>
      <WrapeerSquare>
        <ATop><P color='#de36c0'>a</P></ATop>
        <BTop><P color='#9536de'>b</P></BTop>
        <ALeft><P color='#de36c0'>a</P></ALeft>
        <BRight><P color='#9536de'>b</P></BRight>
        <OutlineSquare />
        <Cuadrado border={border} />
        <DLeft><p>d</p></DLeft>
        <CRight><p>c</p></CRight>
        <DButton><p>d</p></DButton>
        <CButton><p>c</p></CButton>
      </WrapeerSquare>
      <Form >
        <InputGroup>
          <WrapInput>
            <Input type="number" name='a' value={border[0]} onChange={(e) => handleSubmit(e)} max='100' min='0' />
            <p>%</p>
          </WrapInput>
          <P color='#de36c0'>
            <label htmlFor='a'>a</label>
          </P>
        </InputGroup>
        <InputGroup>
          <WrapInput>
            <Input type="number" name='b' value={border[1]} onChange={(e) => handleSubmit(e)} max='100' min='0' />
            <p>%</p>
          </WrapInput>
          <label htmlFor='b'>b</label>
        </InputGroup>
        <InputGroup>
          <WrapInput>
            <Input type="number" name='c' value={border[2]} onChange={(e) => handleSubmit(e)} max='100' min='0' />
            <p>%</p>
          </WrapInput>
          <label htmlFor='c'>c</label>
        </InputGroup>
        <InputGroup>
          <WrapInput>
            <Input type="number" name='d' value={border[3]} onChange={(e) => handleSubmit(e)} max='100' min='0' />
            <p>%</p>
          </WrapInput>
          <label htmlFor='d'>d</label>
        </InputGroup>
      </Form>
      <p>{message}</p>
      <button onClick={() => handleCopy()}>Copiar</button>
    </Layout>
  )
}

export default App
