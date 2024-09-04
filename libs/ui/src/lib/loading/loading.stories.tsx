import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from './loading';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';

const meta: Meta<typeof Loading> = {
  component: Loading,
  title: 'Loading',
};
export default meta;
type Story = StoryObj<typeof Loading>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Loading!/gi)).toBeTruthy();
  },
};
