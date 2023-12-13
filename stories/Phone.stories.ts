import type { Meta, StoryObj } from '@storybook/react';
import Phone from '../../kurr-ads-manager/kurr-ads-manager/src/components/Phone';

const meta: Meta<typeof Phone> = {
  component: Phone,
};

export default meta;
type Story = StoryObj<typeof Phone>;

export const Text: Story = {
  args: {
    title: 'title',
    profile: 'profile',
    description: 'Vegansk och krämig mayo med smak av rostad lök och vitlök.',
    buttonText: 'Läs mer',
    buttonLink: 'https://kurr.co/creator',
    image: '../../src/assets/BannerImage.png',
  },
};
