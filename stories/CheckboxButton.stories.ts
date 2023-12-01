import type { Meta, StoryObj } from '@storybook/react';
import CheckboxButton from '../kurr-ads-manager/src/components/buttons/CheckboxButton'

const meta: Meta<typeof CheckboxButton> = {
  component: CheckboxButton,
};

export default meta;
type Story = StoryObj<typeof CheckboxButton>;

export const Text: Story = {
  args: {
    option1: "Veganskt",
    option2: "Vegetariskt",
  },
};