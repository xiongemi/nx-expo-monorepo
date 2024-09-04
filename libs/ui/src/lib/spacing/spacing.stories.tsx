import type { Meta, StoryObj } from '@storybook/react';
import { Spacing } from './spacing';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';

const meta: Meta<typeof Spacing> = {
  component: Spacing,
  title: 'Spacing',
};
export default meta;
type Story = StoryObj<typeof Spacing>;

export const Primary = {
  args: {
    children: 'Welcome to Spacing!',
  },
};

export const Heading: Story = {
  args: {
    children: 'Welcome to Spacing!',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Spacing!/gi)).toBeTruthy();
  },
};
