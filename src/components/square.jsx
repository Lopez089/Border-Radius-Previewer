import styled from 'styled-components'

export const Square = styled.div`
  display: grid;
  justify-content:center;
  align-items:center;
  grid-column: 2 / 4;
  grid-row: 2/4;
  width:250px;
  height:250px;
  border-radius: ${prop => prop.border.toString().replaceAll(',', '% ').concat('%')};
  background-color: #8BC6EC;
  background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
`
