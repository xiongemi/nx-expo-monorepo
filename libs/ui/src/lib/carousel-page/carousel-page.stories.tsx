import type { Meta, StoryObj } from '@storybook/react';
import { CarouselPage } from './carousel-page';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';

const meta: Meta<typeof CarouselPage> = {
  component: CarouselPage,
  title: 'CarouselPage',
};
export default meta;
type Story = StoryObj<typeof CarouselPage>;

export const Primary = {
  args: {
    testID: '',
    isSuccess: true,
    title: 'Welcome to CarouselPage!',
    content: 'This is a carousel page',
  },
};

export const Heading: Story = {
  args: {
    testID: '',
    isSuccess: true,
    title: 'Welcome to CarouselPage!',
    content: 'This is a carousel page',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to CarouselPage!/gi)).toBeTruthy();
  },
};
