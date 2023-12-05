import type { Meta, StoryObj } from '@storybook/react';
import Header from '../kurr-ads-manager/src/components/navbars/Header';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Text: Story = {
  args: {
  },
};