import type { Meta, StoryObj } from '@storybook/react';
import ColorPicker from '../kurr-ads-manager/src/components/ColorPicker';

const meta: Meta<typeof ColorPicker> = {
  component: ColorPicker,
};

export default meta;
type Test = StoryObj<typeof ColorPicker>;

export const Text: Test = {
  args: {
  },
};
