import type { Meta, StoryObj } from '@storybook/react';
import DropDown from '../kurr-ads-manager/src/components/Dropdown';

const meta: Meta<typeof DropDown> = {
  component: DropDown,
};

export default meta;
type Test = StoryObj<typeof DropDown>;

export const Text: Test = {
  args: {
    label: "Rubrik",
  },
};
