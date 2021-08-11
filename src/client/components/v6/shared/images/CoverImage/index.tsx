import { css } from '@emotion/react';
import React from 'react';
import { commonStyles } from 'client/styles/tokens';
import { getGlobalColorVarName } from 'client/styles/tokens/colors';
import { getImgSrcSet } from 'client/utils/imgSrcSet';
import { Typography } from 'client/components/atoms/Typography';
import { ArrowRightIcon } from 'client/components/v6/shared/icons/ArrowRightIcon';
import { Image } from 'client/components/atoms/image/Image';
import { ImageUrl } from 'server/types/commons';
import { joinClassNames } from 'client/utils/class';

export const parentAnimationStyles = css`
  & .image {
    transition: transform 0.3s cubic-bezier(0, 0.5, 0.7, 1);
  }

  & .image-wrapper::before {
    transition: opacity 0.3s cubic-bezier(0, 0.5, 0.7, 1);
  }

  & .arrow {
    transition: transform 0.3s cubic-bezier(0, 0.5, 0.7, 1),
      opacity 0.3s cubic-bezier(0, 0.5, 0.7, 1);
  }

  &.focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &:active .image,
  &.focus-visible .image {
    transform: scale(1.1);
  }

  &:active .image-wrapper::before,
  &.focus-visible .image-wrapper::before {
    opacity: 0.5;
  }

  &:active .arrow,
  &.focus-visible .arrow {
    transform: translateX(0) scale(1);
    opacity: 1;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover .image {
      transform: scale(1.1);
    }

    &:hover .image-wrapper::before {
      opacity: 0.5;
    }

    &:hover .arrow {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
  }
`;

export type CoverImageProps = {
  className?: string;
  image: ImageUrl;
  caption?: string;
  imageBackgroundColor?: string;
};

export const CoverImage: React.FC<CoverImageProps> = props => {
  return (
    <div
      className={joinClassNames('image-wrapper', props.className)}
      css={css`
        overflow: hidden;
        background-color: ${props.imageBackgroundColor ??
        `var(${getGlobalColorVarName('gray6')})`};
        position: relative;

        &::before {
          position: absolute;
          z-index: 2;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          content: '';
          background-color: var(${getGlobalColorVarName('gray6')});

          opacity: 0;
        }
      `}
    >
      {props.caption && (
        <div
          css={css`
            position: absolute;
            z-index: 1;
            bottom: ${commonStyles.spacing.xs};
            right: ${commonStyles.spacing.xs};
            border: 1px solid var(${getGlobalColorVarName('gray8')});
            padding-top: ${commonStyles.spacing.xs};
            padding-bottom: ${commonStyles.spacing.xs};
            padding-left: ${commonStyles.spacing.xs};
            padding-right: calc(${commonStyles.spacing.xs} + 2px);
            background-color: var(${getGlobalColorVarName('white')});
            line-height: 1;
          `}
        >
          <Typography
            variant="caption"
            element="span"
            css={css`
              text-transform: uppercase;
              font-style: italic;
              color: var(${getGlobalColorVarName('gray8')});
            `}
          >
            {props.caption}
          </Typography>
        </div>
      )}
      <div
        className="arrow"
        css={css`
          position: absolute;
          z-index: 2;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;

          transform: translateX(-102%) scale(0);
          opacity: 0;
        `}
      >
        <ArrowRightIcon
          css={css`
            fill: var(${getGlobalColorVarName('white')});
            width: 50%;
            height: 50%;
          `}
        />
      </div>
      <Image
        className="image"
        src={props.image.lg}
        srcSet={getImgSrcSet(props.image)}
        alt=""
        role="presentation"
        css={css`
          width: 100%;
          height: 100%;
          object-fit: cover;

          transform: scale(1);
        `}
      />
    </div>
  );
};
