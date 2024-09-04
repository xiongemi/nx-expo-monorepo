import type { Meta, StoryObj } from '@storybook/react';
import { ActionButton } from './action-button';

import { within, expect } from '@storybook/test';

const meta: Meta<typeof ActionButton> = {
  component: ActionButton,
  title: 'ActionButton',
  argTypes: {
    onPress: { action: 'onPress executed!' },
  },
};
export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Primary = {
  args: {
    icon: 'heart',
    disabled: false,
    containerColor: '',
    iconColor: 'red',
    testID: '',
  },
};

export const Heading: Story = {
  args: {
    icon: 'close',
    disabled: false,
    containerColor: '',
    iconColor: 'red',
    testID: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ActionButton!/gi)).toBeTruthy();
  },
};
