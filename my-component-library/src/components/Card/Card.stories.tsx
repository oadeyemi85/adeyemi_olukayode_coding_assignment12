import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    imageUrl: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Card Title',
  content: 'This card contains responsive layout and customizable properties.',
  imageUrl: 'https://via.placeholder.com/350x180',
  disabled: false,
  backgroundColor: '#ffffff',
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Card Title',
  content: 'This card is rendered in a disabled state.',
  imageUrl: 'https://via.placeholder.com/350x180',
  disabled: true,
  backgroundColor: '#ffffff',
};