import { css } from '@emotion/react';
import Link from 'next/link';
import { commonStyles } from 'client/styles/tokens';
import { Typography } from 'client/components/atoms/Typography';
import {
  getColorVarName,
  getGlobalColorVarName,
} from 'client/styles/tokens/colors';
import { ImageUrl } from 'server/types/commons';
import { DiscographyType } from 'server/actors/Discography/types';
import { useIntl } from 'client/i18n/hooks/useIntl';
import {
  CoverImage,
  parentAnimationStyles,
} from 'client/components/v6/shared/images/CoverImage';

export type AlbumCellProps = {
  href: string;
  title: string;
  number: string;
  type: DiscographyType;
  image: ImageUrl;
  imageBackgroundColor?: string;
  titleBackgroundColor?: string;
};

export const AlbumCell: React.FC<AlbumCellProps> = props => {
  const { formatAlbumType } = useIntl();
  const caption = formatAlbumType(props.type, props.number);

  return (
    <Link href="/" passHref>
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
              caption={caption}
              imageBackgroundColor={props.imageBackgroundColor}
              css={css`
                flex: 1;
              `}
            />
            <Typography
              variant="h7"
              element="h3"
              lang="ja"
              ellipsis
              css={css`
                color: var(${getGlobalColorVarName('gray7')});
                writing-mode: vertical-rl;
                flex: 0 0 auto;
                line-height: 1.5;
                padding: ${commonStyles.spacing.xs};
                background-color: ${props.titleBackgroundColor ??
                `var(${getGlobalColorVarName('gray0')})`};
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
