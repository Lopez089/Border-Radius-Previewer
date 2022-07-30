import { useState } from 'react'
import styled from 'styled-components'

const inicialState = [0, 0, 0, 0]

const Cuadrado = styled.div`
  width:250px;
  height:250px;
  border-radius: ${prop => prop.border.toString().replaceAll(',', '% ').concat('%')};
  background-color:red;
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
    <>
      <Cuadrado border={border} />
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
    </>
  )
}

export default App
