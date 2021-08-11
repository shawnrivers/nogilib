import { css } from '@emotion/react';
import Link from 'next/link';
import { Image } from 'client/components/atoms/image/Image';
import { Typography } from 'client/components/atoms/Typography';
import { commonStyles } from 'client/styles/tokens';
import {
  getColorVarName,
  getGlobalColorVarName,
} from 'client/styles/tokens/colors';
import { ImageUrl } from 'server/types/commons';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { getImgSrcSet } from 'client/utils/imgSrcSet';

export type MemberCellProps = {
  href: string;
  name: string;
  nameLang: string;
  number?: string | number;
  position?: 'center' | 'fukujin';
  image: ImageUrl;
  imageBackgroundColor?: string;
  nameBackgroundColor?: string;
};

export const MemberCell: React.FC<MemberCellProps> = props => {
  const { getTranslation } = useTranslations();

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
            transform: scale(1.1);
          }
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
            border: 2px solid
              var(${getColorVarName('onBackground', 'standard')});
          `}
        >
          <div
            css={css`
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column-reverse;
              overflow: hidden;
              z-index: 0;
            `}
          >
            <div
              css={css`
                flex: 0 0 auto;
                display: flex;
                align-items: center;
              `}
            >
              {props.number && (
                <span
                  css={css`
                    flex: 0 0 40px;
                    align-self: stretch;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-right: 1px solid
                      var(${getColorVarName('onBackground', 'standard')});
                  `}
                >
                  <Typography
                    variant="h6"
                    element="span"
                    css={css`
                      color: var(
                        ${getColorVarName('onBackground', 'standard')}
                      );
                    `}
                  >
                    {props.number}
                  </Typography>
                </span>
              )}
              <Typography
                variant="h7"
                element="h3"
                lang={props.nameLang}
                ellipsis
                css={css`
                  flex: 1;
                  display: inline;
                  text-align: center;
                  color: var(${getGlobalColorVarName('gray7')});
                  padding: ${commonStyles.spacing.xs};
                  background-color: ${props.nameBackgroundColor ??
                  `var(${getGlobalColorVarName('gray0')})`};
                `}
              >
                {props.name}
              </Typography>
            </div>
            <div
              css={css`
                flex: 1;
                overflow: hidden;
                position: relative;
                border-bottom: 1px solid
                  var(${getColorVarName('onBackground', 'standard')});
                background-color: ${props.image ??
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
              {props.position && (
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
                    {getTranslation(props.position)}
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
