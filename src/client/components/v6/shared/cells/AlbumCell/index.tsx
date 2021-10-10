import { css } from '@emotion/react';
import Link from 'next/link';
import { commonStyles } from 'client/styles/tokens';
import { Typography } from 'client/components/atoms/Typography';
import { getColorVarName } from 'client/styles/tokens/colors';
import { ImageUrl } from 'server/types/commons';
import {
  CoverImage,
  parentAnimationStyles,
} from 'client/components/v6/shared/images/CoverImage';

export type AlbumCellProps = {
  href: string;
  title: string;
  caption?: string;
  image: ImageUrl;
};

export const AlbumCell: React.FC<AlbumCellProps> = props => {
  return (
    <Link href={props.href} passHref>
      <a
        css={css`
          display: inline-block;
          width: 100%;
          height: 100%;
          vertical-align: bottom;
          cursor: pointer;
          ${parentAnimationStyles};
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
            position: relative;
            border: 2px solid
              var(${getColorVarName('onBackground', 'standard')});
            border-radius: ${commonStyles.borderRadius.xxs};
            overflow: hidden;
          `}
        >
          <div
            css={css`
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: row-reverse;
              overflow: hidden;
              z-index: 0;
            `}
          >
            <CoverImage
              image={props.image}
              caption={props.caption}
              objectPosition="center"
              css={css`
                flex: 1;
              `}
            />
            <Typography
              variant="h8"
              element="h3"
              lang="ja"
              ellipsis
              css={css`
                color: var(${getColorVarName('onBackground', 'standard')});
                writing-mode: vertical-rl;
                flex: 0 0 auto;
                line-height: 1.5;
                padding: ${commonStyles.spacing.xs} ${commonStyles.spacing.xxs};
                background-color: var(
                  ${getColorVarName('background', 'variant0')}
                );
                border-right: 1px solid
                  var(${getColorVarName('onBackground', 'standard')});
              `}
            >
              {props.title}
            </Typography>
          </div>
        </div>
      </a>
    </Link>
  );
};
