import { css } from '@emotion/react';
import Link from 'next/link';
import { Image } from 'client/components/atoms/image/Image';
import { commonStyles } from 'client/styles/tokens';
import { Typography } from 'client/components/atoms/Typography';
import {
  getColorVarName,
  getGlobalColorVarName,
} from 'client/styles/tokens/colors';
import { ImageUrl } from 'server/types/commons';
import { DiscographyType } from 'server/actors/Discography/types';
import { useIntl } from 'client/i18n/hooks/useIntl';
import { getImgSrcSet } from 'client/utils/imgSrcSet';

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
          vertical-align: bottom;
          cursor: pointer;

          & img {
            transition: transform 0.3s cubic-bezier(0, 0.5, 0.7, 1);
          }

          &:hover img {
            transform: scale(1.2);
          }
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
              {caption}
            </Typography>
          </div>
          <div
            css={css`
              width: 100%;
              height: 100%;
              display: flex;
              overflow: hidden;
              z-index: 0;
            `}
          >
            <Typography
              variant="h7"
              element="h3"
              lang="ja"
              ellipsis
              css={css`
                color: var(${getGlobalColorVarName('gray7')});
                writing-mode: vertical-rl;
                flex: 0 0 auto;
                padding: ${commonStyles.spacing.xs};
                background-color: ${props.titleBackgroundColor ??
                `var(${getGlobalColorVarName('gray0')})`};
              `}
            >
              {props.title}
            </Typography>
            <div
              css={css`
                flex: 1;
                overflow: hidden;
                border-left: 1px solid
                  var(${getColorVarName('onBackground', 'standard')});
                background-color: ${props.imageBackgroundColor ??
                `var(${getGlobalColorVarName('gray6')})`};
              `}
            >
              <Image
                src={props.image.lg}
                srcSet={getImgSrcSet(props.image)}
                alt=""
                css={css`
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                `}
              />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
