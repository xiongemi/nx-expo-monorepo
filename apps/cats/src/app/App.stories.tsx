import type { Meta, StoryObj } from '@storybook/react';
import { App } from './App';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';

const meta: Meta<typeof App> = {
  component: App,
  title: 'App',
};
export default meta;
type Story = StoryObj<typeof App>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Cat Facts/gi)).toBeTruthy();
  },
};
