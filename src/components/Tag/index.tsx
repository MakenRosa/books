import React from 'react'
import styled from 'styled-components'

export interface TagProps {
    text?: string
    variant?: 'container' | 'outline'
}

const StyledTag = styled.span<TagProps>`
    padding: 24px 32px;
    color: #FFFFFF;
    background: #EB9B00;
    font-weight: 700;
    font-size: 24px;
    display: inline-block;
    font-family: sans-serif;
`

export const Tag = ({ text }: TagProps) => {
    return (
    <StyledTag>
        {text}
    </StyledTag>)
}