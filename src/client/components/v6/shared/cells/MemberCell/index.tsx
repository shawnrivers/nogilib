import { css } from '@emotion/react';
import Link from 'next/link';
import { Typography } from 'client/components/atoms/Typography';
import { commonStyles } from 'client/styles/tokens';
import {
  getColorVarName,
  getGlobalColorVarName,
} from 'client/styles/tokens/colors';
import { ImageUrl } from 'server/types/commons';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import {
  CoverImage,
  parentAnimationStyles,
} from 'client/components/v6/shared/images/CoverImage';

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
                border-top: 1px solid
                  var(${getColorVarName('onBackground', 'standard')});
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
                  line-height: 1.5;
                  color: var(${getGlobalColorVarName('gray7')});
                  padding: ${commonStyles.spacing.xs};
                  background-color: ${props.nameBackgroundColor ??
                  `var(${getGlobalColorVarName('gray0')})`};
                `}
              >
                {props.name}
              </Typography>
            </div>
            <CoverImage
              image={props.image}
              caption={
                props.position ? getTranslation(props.position) : undefined
              }
              imageBackgroundColor={props.imageBackgroundColor}
              css={css`
                flex: 1;
              `}
            />
          </div>
        </div>
      </a>
    </Link>
  );
};
