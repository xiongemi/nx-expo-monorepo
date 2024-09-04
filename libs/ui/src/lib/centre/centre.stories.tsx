import type { Meta, StoryObj } from '@storybook/react';
import { Centre } from './centre';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';

const meta: Meta<typeof Centre> = {
  component: Centre,
  title: 'Centre',
};
export default meta;
type Story = StoryObj<typeof Centre>;

export const Primary = {
  args: {
    children: 'Welcome to Centre!',
  },
};

export const Heading: Story = {
  args: {
    children: 'Welcome to Centre!',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Centre!/gi)).toBeTruthy();
  },
};
