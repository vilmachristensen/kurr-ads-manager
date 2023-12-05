import type { Meta, StoryObj } from '@storybook/react';
import VerticalNavbar from '../kurr-ads-manager/src/components/navbars/VerticalNavbar';

const meta: Meta<typeof VerticalNavbar> = {
  component: VerticalNavbar,
};

export default meta;
type Test = StoryObj<typeof VerticalNavbar>;

export const Text: Test = {
  args: {
  },
};
