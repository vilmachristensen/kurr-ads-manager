import type { Meta, StoryObj } from '@storybook/react';
import QuaternaryButton from '../kurr-ads-manager/src/components/buttons/QuaternaryButton'

const meta: Meta<typeof QuaternaryButton> = {
  component: QuaternaryButton,
};

export default meta;
type Story = StoryObj<typeof QuaternaryButton>;

export const Test: Story = {
  args: {
    title: 'Quaternary'
  },
};