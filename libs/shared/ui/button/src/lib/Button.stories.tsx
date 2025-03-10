import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Shared UI/Button',
  args: {
    children: 'Button',
    type: 'button',
    variant: 'primary',
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Secondary = {
  args: {
    children: 'Button',
    variant: 'secondard',
    type: 'button',
  },
};
