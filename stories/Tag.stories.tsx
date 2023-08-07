import React from 'react'
import { Tag, TagProps } from '../src'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'components/Tag',
    component: Tag,
    parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const Component = Template.bind({})

Component.args = {
    text: 'Tag',
} as TagProps