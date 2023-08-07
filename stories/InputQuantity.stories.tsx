import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputQuantity, InputQuantityProps } from '../src'

export default {
  title: 'components/InputQuantity',
  component: InputQuantity,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof InputQuantity>;

const Template: ComponentStory<typeof InputQuantity> = (args) => <InputQuantity {...args} />;

export const Component = Template.bind({})
Component.args = {
    label: 'An interesting label'
} as InputQuantityProps