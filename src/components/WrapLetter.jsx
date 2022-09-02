import styled, { css } from 'styled-components'

export const WrapLetter = styled.div`
  display: flex;
  justify-content: space-between;
  padding:1px;

    ${props => props.horizontalTop
        ? css`
            grid-column: 2/4;
            grid-row: 1; 
        `
        : null
    }

    ${props => props.horizontalBotton
        ? css`
            grid-column: 2/4;
            grid-row: 4; 
        `
        : null
    }

    ${props => props.verticalLeft
        ? css`
        grid-column: 1/2;
        grid-row: 2/4;
        flex-direction: column;
        padding:2px;
      `
        : null
    }

    ${props => props.verticalRight
        ? css`
            grid-column: 4/4;
            grid-row: 2/4;
            flex-direction: column;
            align-items: center;
        `
        : null
    }
`
