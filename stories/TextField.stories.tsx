import React from 'react';
import { TextField, TextFieldProps } from '../src'

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/TextField',
  component: TextField,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />

export const Component = Template.bind({})
Component.args = {
    label: 'An label for your input!'
} as TextFieldProps