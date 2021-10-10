import { css } from '@emotion/react';
import type { Meta, Story } from '@storybook/react';
import { AlbumCell, AlbumCellProps } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';

export default {
  title: 'Components/Shared/Cells/AlbumCell',
  decorators: [ThemeDecorator()],
  component: AlbumCell,
} as Meta<AlbumCellProps>;

const Template: Story<AlbumCellProps> = props => {
  return (
    <div
      css={css`
        width: 250px;
        height: 200px;
      `}
    >
      <AlbumCell {...props}></AlbumCell>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  href: '/',
  title: 'ごめんねFingers Crossed',
  caption: '27th. single',
  image: {
    sm: '/images/artworks/singles/27/A@1x.jpg',
    md: '/images/artworks/singles/27/A@2x.jpg',
    lg: '/images/artworks/singles/27/A@3x.jpg',
  },
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  href: '/',
  title: '夜明けまで強がらなくてもいい',
  caption: '24th. single',
  image: {
    sm: '/images/artworks/singles/24/A@1x.jpg',
    md: '/images/artworks/singles/24/A@2x.jpg',
    lg: '/images/artworks/singles/24/A@3x.jpg',
  },
};
