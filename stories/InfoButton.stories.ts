import type { Meta, StoryObj } from '@storybook/react';
import InfoButton from '../kurr-ads-manager/src/components/buttons/InfoButton';

const meta: Meta<typeof InfoButton> = {
  component: InfoButton,
};

export default meta;
type Story = StoryObj<typeof InfoButton>;

export const Text: Story = {
  args: {
    title: "Titel",
    description: "Lorem ipsum dolor sit amet, ",
  },
};
