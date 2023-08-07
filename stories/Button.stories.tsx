import React from 'react'
import { Button } from '../src'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Button',
    component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = () => <Button />

export const Primary = Template.bind({})