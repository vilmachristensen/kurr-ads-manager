import type { Meta, StoryObj } from '@storybook/react';
import DropDown from '../kurr-ads-manager/src/components/DropDown';

const meta: Meta<typeof DropDown> = {
  component: DropDown,
};

export default meta;
type Test = StoryObj<typeof DropDown>;

export const Text: Test = {
  args: {
    title: "Titel",
    label: "Label",
    width: 20,
    inHeader: false,
    menuItems: ["alternativ1", "alternativ2", "alternativ3"],
  },
};