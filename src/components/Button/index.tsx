import React from 'react'
import styled, { css } from 'styled-components'

export interface ButtonProps {
    text?: string
    variant?: 'container' | 'outline'
    onClick?: () => void
}

const StyledButton = styled.button<ButtonProps>`
    background-color: ${(props: ButtonProps) => props.variant === 'container' ? '#EB9B00' : '#fff'};
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: ${(props: ButtonProps) => props.variant === 'container' ? '#FFF' : '#EB9B00'};
    font-size: 20px;
    cursor: pointer;
    ${(props: ButtonProps) => 
    props.variant === 'container' 
    ? css`
        &:hover {
            background-color: #B87900;
            border: 2px solid #B87900;
        }`
        : css`
        &:hover {
            background-color: #fff;
            border: 2px solid #B87900;
        }`
    };
`

export const Button = ({text, onClick, variant = 'container'}: ButtonProps) => {
    return (<StyledButton onClick={onClick} variant={variant}>
        {text}
    </StyledButton>)
}