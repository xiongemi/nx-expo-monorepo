import type { Meta, StoryObj } from '@storybook/react';
import { Facts } from './facts';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';
import { NavigationDecorator } from '../../../.storybook/mocks/navigation-decorator';
import { QueryClientDecorator } from '../../../.storybook/mocks/query-client-decorator';

const meta: Meta<typeof Facts> = {
  component: Facts,
  title: 'Facts',
  decorators: [QueryClientDecorator, NavigationDecorator],
};
export default meta;
type Story = StoryObj<typeof Facts>;

export const Primary = {
  args: {
    like: () => {},
    getFactById: (id) => ({ id: { current: id }, content: 'This is a fact' }),
    viewed: () => {},
    getLastViewedFact: () => undefined,
    removeFromViewed: () => {},
  },
};

export const Heading: Story = {
  args: {
    like: () => {},
    getFactById: (id) => ({ id: { current: id }, content: 'This is a fact' }),
    viewed: () => {},
    getLastViewedFact: () => undefined,
    removeFromViewed: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/This is a fact/gi)).toBeTruthy();
  },
};
