import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './carousel';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  title: 'Carousel',
};
export default meta;
type Story = StoryObj<typeof Carousel>;

export const Primary = {
  args: {
    isSuccess: true,
    title: 'Welcome to Carousel!',
    content: 'This is a carousel',
  },
};

export const Error = {
  args: {
    isSuccess: false,
    isError: true,
    title: 'Welcome to Carousel!',
    content: 'This is a carousel',
  },
};

export const Loading = {
  args: {
    isSuccess: false,
    isError: false,
    isLoading: true,
    title: 'Welcome to Carousel!',
    content: 'This is a carousel',
  },
};

export const Heading: Story = {
  args: {
    isSuccess: true,
    title: 'Welcome to Carousel!',
    content: 'This is a carousel',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Carousel!/gi)).toBeTruthy();
  },
};
