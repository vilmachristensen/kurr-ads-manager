import type { Meta, StoryObj } from '@storybook/react';
import PrimaryButton from '../kurr-ads-manager/src/components/buttons/PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const Text: Story = {
  args: {
    title: "hej",
    disabled: false
  },
};
