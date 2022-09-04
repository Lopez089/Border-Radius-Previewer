import React from 'react'
import PropTypes from 'prop-types'
import {
  Square,
  OutlineSquare,
  WrapeerSquare,
  P,
  WrapLetter,
  Letter
} from './index'

export const BoxSquare = ({ border, message }) => {
  return (
    <>
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
    </>
  )
}

BoxSquare.propTypes = {
  border: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired
}
