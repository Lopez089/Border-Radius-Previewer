import React from 'react'
import PropTypes from 'prop-types'
import { handleSubmit, handleCopy } from '../utils/index'
import {
  P,
  InputGroup,
  Form,
  WrapInput,
  Input,
  Button
} from './index'

export const WrapFrom = ({ border, setBorder, setMessage }) => {
  return (
    <>
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
    </>
  )
}

WrapFrom.propTypes = {
  border: PropTypes.number,
  setBorder: PropTypes.func,
  setMessage: PropTypes.func
}
