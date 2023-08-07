import React from 'react'
import { OptionsGroup } from '../src'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'OptionsGroup',
    component: OptionsGroup
} as ComponentMeta<typeof OptionsGroup>

const Template: ComponentStory<typeof OptionsGroup> = (args) => <OptionsGroup {...args}/>

export const Component = Template.bind({})

Component.args = {
    options: [
        {
            id: 1,
            title: 'E-book',
            body: 'R$00,00',
            footer: '.pdf, .epub, .mobi',
        },
        {
            id: 2,
            title: 'Impresso',
            body: 'R$00,00',
            footer: '.pdf, .epub, .mobi',
        },
        {
            id: 3,
            title: 'Impresso + E-book',
            body: 'R$00,00',
            footer: '.pdf, .epub, .mobi',
        },
    ],
}
