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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis elementum velit ornare blandit. Fusce eu leo vitae nisl gravida pharetra. Sed condimentum dui quis lacinia hendrerit. Maecenas id odio in felis blandit condimentum. Suspendisse cursus metus eget fermentum ullamcorper. Mauris ut dolor euismod risus finibus faucibus. Morbi erat urna, condimentum et massa et, commodo dictum arcu. Phasellus nec nisi sed nisl iaculis maximus. Nulla at pulvinar ligula. Mauris et gravida lectus. Nullam nibh neque, tincidunt ut ipsum id, porttitor semper magna. Praesent tellus orci, vehicula at volutpat eget, volutpat sit amet diam. Nunc finibus turpis eget lacus vestibulum, quis commodo magna convallis. Sed blandit vitae neque nec dignissim. Proin in magna tortor. ",
  },
};
