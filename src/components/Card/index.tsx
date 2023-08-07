import React, { ReactNode } from 'react'
import styled from 'styled-components'

export interface CardProps {
    children?: ReactNode
}

const StyledCard = styled.div`
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    padding: 48px 32px 48px 48px;
    justify-content: space-between;
    align-items: flex-start;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export const Card = ({ children }: CardProps) => {
    return (
    <StyledCard>
        {children}
    </StyledCard>)
}

