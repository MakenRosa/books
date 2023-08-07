import React from 'react'
import { Button, ButtonProps } from '../src'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Button',
    component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Container = Template.bind({})

Container.args = {
    text: 'This is a button',
    variant: 'container'
} as ButtonProps


export const outline = Template.bind({})
outline.args = {
    text: 'This is a button',
    variant: 'outline'
} as ButtonProps