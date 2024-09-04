import type { Meta, StoryObj } from '@storybook/react';
import { ListPage } from './list-page';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';

const meta: Meta<typeof ListPage> = {
  component: ListPage,
  title: 'ListPage',
};
export default meta;
type Story = StoryObj<typeof ListPage>;

export const Primary = {
  args: {
    editMode: false,
    items: [
      {
        id: '1',
        title: 'Title',
        description: 'Description',
      },
    ],
    onRemove: (id: string) => console.log(id),
    onGoToDetails: (id: string) => console.log(id),
  },
};

export const Editing = {
  args: {
    editMode: true,
    items: [
      {
        id: '1',
        title: 'Title',
        description: 'Description',
      },
    ],
    onRemove: (id: string) => console.log(id),
    onGoToDetails: (id: string) => console.log(id),
  },
};
