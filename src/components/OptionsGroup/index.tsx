import React from "react"
import styled from "styled-components"

export interface OptionProps {
    id: number
    title: string
    body: string
    footer: string
}

export interface OptionsGroupProps {
    options: OptionProps[]
    defaultValue?: OptionProps | null
    onChange?: (option: OptionProps) => void
}

const StyledSection = styled.section<{ selected: boolean }>`
    width: 194px;
    height: 88px;
    background: ${props => props.selected
    ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' 
    : '#FFF'};
    border: 1px solid;
    border-color: ${props => props.selected ? '#002F52' : '#EB9B00'};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 10px;
    font-family: sans-serif;
    cursor: pointer;

    header {
        font-size: 12px;
        font-weight: 400;
        color: ${props => props.selected ? '#FFF' : '#EB9B00'};
    }
    strong {
        color: ${props => props.selected ? '#FFF' : '#EB9B00'};
        font-size: 16px;
        font-weight: bold;
    }
    footer {
        font-size: 12px;
        font-weight: 400;
        color: ${props => props.selected ? '#FFF' : 'rgba(0, 0, 0, 0.54);'};
    }
`

export const OptionsGroup = ({ options, onChange, defaultValue }: OptionsGroupProps) => {
    const [selected, setSelected] = React.useState<OptionProps | null>(defaultValue ?? null)
    
    const onSelect = (option:OptionProps) => {
        setSelected(option.id == selected?.id ? null : option)
        onChange && onChange(option)
    }

    return(
        <>
            {options.map((option) =>
            <StyledSection 
            key={option.id}
            onClick={() => onSelect(option)} 
            selected={selected?.id == option.id}>
                <header>
                    {option.title}
                </header>
                <div>
                    <strong>
                        {option.body}
                    </strong>
                </div>
                <footer>
                    {option.footer}
                </footer>
            </StyledSection>)}
        </>
    )
}