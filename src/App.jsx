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
  position: relative;
  display: grid;
  grid-template-columns: 30px repeat(2, 1fr) 30px;
  grid-template-rows: 30px repeat(2, 1fr) 30px;
`

const ATop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 2;
  grid-row: 1;
`
const BTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 3 / 3;
  grid-row: 1;
`
const ALeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 1;
  grid-row: 2;
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
const CRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 4/ 4;
  grid-row: 3;
`
const DButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 2;
  grid-row: 4;
`
const CButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 3/ 3;
  grid-row: 4;
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
        <ATop><p>a</p></ATop>
        <BTop><p>b</p></BTop>
        <ALeft><p>a</p></ALeft>
        <BRight><p>b</p></BRight>
        <OutlineSquare />
        <Cuadrado border={border} />
        <DLeft><p>d</p></DLeft>
        <CRight><p>c</p></CRight>
        <DButton><p>d</p></DButton>
        <CButton><p>c</p></CButton>
      </WrapeerSquare>
      <form >
        <label htmlFor='a'>a</label>
        <input type="number" name='a' value={border[0]} onChange={(e) => handleSubmit(e)} max='100' min='0' />
        <label htmlFor='b'>b</label>
        <input type="number" name='b' value={border[1]} onChange={(e) => handleSubmit(e)} max='100' min='0' />
        <label htmlFor='c'>c</label>
        <input type="number" name='c' value={border[2]} onChange={(e) => handleSubmit(e)} max='100' min='0' />
        <label htmlFor='d'>d</label>
        <input type="number" name='d' value={border[3]} onChange={(e) => handleSubmit(e)} max='100' min='0' />
      </form>
      <p>{message}</p>
      <button onClick={() => handleCopy()}>Copiar</button>
    </Layout>
  )
}

export default App
