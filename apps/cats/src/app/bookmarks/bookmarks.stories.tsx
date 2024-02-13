import type { Meta, StoryObj } from '@storybook/react';
import { Bookmarks } from './bookmarks';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { NavigationDecorator } from '../../../.storybook/mocks/navigation-decorator';

const meta: Meta<typeof Bookmarks> = {
  component: Bookmarks,
  title: 'Bookmarks',
  decorators: [NavigationDecorator],
};
export default meta;
type Story = StoryObj<typeof Bookmarks>;

export const Primary = {
  args: {
    bookmarks: [
      {
        id: '1',
        title: '2021-10-04',
        description: 'This is a bookmark',
      },
    ],
  },
};

export const Heading: Story = {
  args: {
    bookmarks: [
      {
        id: '1',
        title: '2021-10-04',
        description: 'This is a bookmark',
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/This is a bookmark/gi)).toBeTruthy();
  },
};
