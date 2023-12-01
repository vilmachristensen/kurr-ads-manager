import type { Meta, StoryObj } from "@storybook/react";
import ColorPicker from '../kurr-ads-manager/src/components/ColorPicker';


const meta: Meta<typeof ColorPicker> = {
  component: ColorPicker,
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Test: Story = {
  args: {

  },
};
