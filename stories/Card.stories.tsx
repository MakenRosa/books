import React from 'react'
import { Card } from '../src'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Card',
    component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = () => 
<Card>
    This is a card!
</Card>

export const Primary = Template.bind({})