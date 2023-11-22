import type { Meta, StoryObj } from '@storybook/react';
import TertiaryButton from '../kurr-ads-manager/src/components/buttons/TertiaryButton';

const meta: Meta<typeof TertiaryButton> = {
  component: TertiaryButton,
};

export default meta;
type Story = StoryObj<typeof TertiaryButton>;

export const Text: Story = {
  args: {
    title: "hej",
    disabled: false
  },
};
