import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from '../kurr-ads-manager/src/components/buttons/RadioButton'

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Text: Story = {
  args: {
    option1: "Annonsera till alla",
    option2: "Annonsera till specik målgrupp",
  },
};