export const handleSubmit = (e, border, setBorder) => {
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

export const handleCopy = (border, setMessage) => {
  const css = `border-radius:${border.toString().replaceAll(',', '% ').concat('%')};`
  // css.select();
  // copyText.setSelectionRange(0, 99999); /* For mobile devices */
  navigator.clipboard.writeText(css)
  setMessage('Css Copiado!!!')
  setTimeout(() => setMessage(''), 3000)
}
