import type { Meta, StoryObj } from '@storybook/react';
import { CarouselActions } from './carousel-actions';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';

const meta: Meta<typeof CarouselActions> = {
  component: CarouselActions,
  title: 'CarouselActions',
};
export default meta;
type Story = StoryObj<typeof CarouselActions>;

export const Primary = {
  args: {
    children: <>Welcome to CarouselActions!</>,
  },
};

export const Heading: Story = {
  args: {
    children: <>Welcome to CarouselActions!</>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to CarouselActions!/gi)).toBeTruthy();
  },
};
