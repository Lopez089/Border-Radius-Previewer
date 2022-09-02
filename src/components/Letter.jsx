import styled, { css } from 'styled-components'

export const Letter = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    ${props =>
        props.top
            ? css`
        border-top : 2px solid ${props => props.color};
        width: ${props => props.w};
        `
            : props.bottom
                ? css`
        border-bottom: 2px solid ${props => props.color};
        width: ${props => props.w};
        `
                : props.right
                    ? css`
        border-right: 2px solid ${props => props.color};
        height: ${props => props.w};
        width:98%;
        `
                    : props.left
                        ? css`
            border-left: 2px solid ${props => props.color};
            height: ${props => props.w};
            width:98%;
        `
                        : null
    }

`
