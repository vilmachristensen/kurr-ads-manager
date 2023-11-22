import type { Meta, StoryObj } from '@storybook/react';
import TextInputField from '../kurr-ads-manager/src/components/TextInputField';

const meta: Meta<typeof TextInputField> = {
  component: TextInputField,
};

export default meta;
type Story = StoryObj<typeof TextInputField>;

export const Text: Story = {
  args: {
    label: "Text",
    disabled: false
  },
};