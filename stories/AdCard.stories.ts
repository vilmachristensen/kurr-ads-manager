import type { Meta, StoryObj } from "@storybook/react";
import AdCard from "../kurr-ads-manager/src/components/AdCard";


const meta: Meta<typeof AdCard> = {
  component: AdCard,
};

export default meta;
type Story = StoryObj<typeof AdCard>;

export const Text: Story = {
  args: {
    adType: "BANNER",
  },
};
