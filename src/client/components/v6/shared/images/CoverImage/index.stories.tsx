import { css } from '@emotion/react';
import type { Meta, Story } from '@storybook/react';
import Link from 'next/link';
import { CoverImage, CoverImageProps, parentAnimationStyles } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';

export default {
  title: 'Components/Shared/Images/CoverImage',
  decorators: [ThemeDecorator()],
  component: CoverImage,
} as Meta<CoverImageProps>;

const Template: Story<CoverImageProps> = props => {
  return (
    <Link href="/" passHref>
      <a
        css={css`
          display: inline-block;
          width: 200px;
          height: 200px;
          ${parentAnimationStyles};
        `}
      >
        <CoverImage
          css={css`
            width: 100%;
            height: 100%;
          `}
          {...props}
        />
      </a>
    </Link>
  );
};

export const Default = Template.bind({});
Default.args = {
  image: {
    sm: '/images/artworks/singles/27/A@1x.jpg',
    md: '/images/artworks/singles/27/A@2x.jpg',
    lg: '/images/artworks/singles/27/A@3x.jpg',
  },
  caption: '27th. single',
  imageBackgroundColor: '#bf0000',
};

export const NoCaption = Template.bind({});
NoCaption.args = {
  image: {
    sm: '/images/artworks/singles/27/A@1x.jpg',
    md: '/images/artworks/singles/27/A@2x.jpg',
    lg: '/images/artworks/singles/27/A@3x.jpg',
  },
  imageBackgroundColor: '#bf0000',
};
