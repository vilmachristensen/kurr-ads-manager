import type { Meta, StoryObj } from '@storybook/react';
import SecondaryButton from '../kurr-ads-manager/src/components/buttons/SecondaryButton'

const meta: Meta<typeof SecondaryButton> = {
  component: SecondaryButton,
};

export default meta;
type Story = StoryObj<typeof SecondaryButton>;

export const Secondary: Story = {
  args: {
    title: 'secondary'
  },
};