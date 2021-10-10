import { css } from '@emotion/react';
import type { Meta, Story } from '@storybook/react';
import { SongCell, SongCellProps } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';

export default {
  title: 'Components/Shared/Cells/SongCell',
  decorators: [ThemeDecorator()],
  component: SongCell,
} as Meta<SongCellProps>;

const Template: Story<SongCellProps> = props => {
  return (
    <div
      css={css`
        width: 200px;
        height: 240px;
      `}
    >
      <SongCell {...props}></SongCell>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  href: '/',
  title: 'ごめんねFingers crossed',
  titleLang: 'ja',
  number: 1,
  caption: '#title',
  image: {
    sm: '/images/artworks/singles/27/A@1x.jpg',
    md: '/images/artworks/singles/27/A@2x.jpg',
    lg: '/images/artworks/singles/27/A@3x.jpg',
  },
};

export const Variation = Template.bind({});
Variation.args = {
  href: '/',
  title: 'ざぶんざぶん',
  titleLang: 'ja',
  number: 4,
  caption: '#unit',
  image: {
    sm: '/images/artworks/singles/27/B@1x.jpg',
    md: '/images/artworks/singles/27/B@2x.jpg',
    lg: '/images/artworks/singles/27/B@3x.jpg',
  },
};

export const NoNumber = Template.bind({});
NoNumber.args = {
  href: '/',
  title: 'ごめんねFingers crossed',
  titleLang: 'ja',
  caption: '#title',
  image: {
    sm: '/images/artworks/singles/27/A@1x.jpg',
    md: '/images/artworks/singles/27/A@2x.jpg',
    lg: '/images/artworks/singles/27/A@3x.jpg',
  },
};

export const NoCaption = Template.bind({});
NoCaption.args = {
  href: '/',
  title: 'ごめんねFingers crossed',
  titleLang: 'ja',
  number: 1,
  image: {
    sm: '/images/artworks/singles/27/A@1x.jpg',
    md: '/images/artworks/singles/27/A@2x.jpg',
    lg: '/images/artworks/singles/27/A@3x.jpg',
  },
};
