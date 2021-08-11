import { css } from '@emotion/react';
import type { Meta, Story } from '@storybook/react';
import { AlbumCell, AlbumCellProps } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';

export default {
  title: 'Components/Features/Discography/AlbumCell',
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
  number: '27',
  type: 'single',
  image: {
    sm: '/images/artworks/singles/27/A@1x.jpg',
    md: '/images/artworks/singles/27/A@2x.jpg',
    lg: '/images/artworks/singles/27/A@3x.jpg',
  },
  titleBackgroundColor: '#f8b1b1',
  artworkBackgroundColor: '#bf0000',
};

export const FallbackBackground = Template.bind({});
FallbackBackground.args = {
  href: '/',
  title: 'ごめんねFingers Crossed',
  number: '27',
  type: 'single',
  image: {
    sm: '/images/artworks/singles/27/A@1x.jpg',
    md: '/images/artworks/singles/27/A@2x.jpg',
    lg: '/images/artworks/singles/27/A@3x.jpg',
  },
};
