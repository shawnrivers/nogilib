import { css } from '@emotion/react';
import { BaseLink } from 'client/components/atoms/BaseLink';
import { DiscographyIcon } from 'client/components/atoms/icons/DiscographyIcon';
import { MembersIcon } from 'client/components/atoms/icons/MembersIcon';
import { SearchIcon } from 'client/components/atoms/icons/SearchIcon';
import { Typography } from 'client/components/atoms/Typography';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { commonStyles } from 'client/styles/tokens';
import { getColorVarName } from 'client/styles/tokens/colors';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import {
  getDiscographyUrl,
  getMembersUrl,
  getSearchUrl,
} from 'client/utils/url';

const NavItem: React.FC<{
  href: string;
  icon: React.ReactNode;
  text: string;
}> = props => {
  return (
    <BaseLink
      href={props.href}
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: ${commonStyles.spacing.xxs} ${commonStyles.spacing.xs};
        border-radius: ${commonStyles.borderRadius.xs};
        background: none;
        transition: background-color 0.3s ease-out;

        &.focus-visible {
          outline: 2px solid transparent;
          outline-offset: 2px;
        }

        &:active,
        &.focus-visible {
          background-color: var(${getColorVarName('background', 'variant0')});
        }

        @media (hover: hover) and (pointer: fine) {
          &:hover {
            background-color: var(${getColorVarName('background', 'variant0')});
          }
        }
      `}
    >
      {props.icon}
      <Typography
        variant="body4"
        capitalize
        css={css`
          margin-top: 0.3em;
          line-height: 1.2;
          white-space: nowrap;
        `}
      >
        {props.text}
      </Typography>
    </BaseLink>
  );
};

export const BottomNavigationBar: React.FC = () => {
  const { getTranslation } = useTranslations();

  return (
    <nav className="small">
      <div
        css={css`
          width: 100vw;
          box-sizing: border-box;
          background-color: var(${getColorVarName('surface', 'standard')});
          border-top: 3px solid var(${getColorVarName('onSurface', 'standard')});
          z-index: ${commonStyles.elevations[
            componentElevationKey.navigationBar
          ].zIndex};
          position: fixed;
          bottom: 0;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: ${commonStyles.sizes.navigationBarHeight};
            padding-top: 0;
            padding-bottom: env(safe-area-inset-bottom);
            padding-left: calc(0.5em + env(safe-area-inset-left));
            padding-right: calc(0.5em + env(safe-area-inset-right));

            & > * {
              flex: 1;
              text-align: center;
            }
          `}
        >
          <NavItem
            href={getDiscographyUrl()}
            icon={
              <DiscographyIcon
                width={24}
                height={24}
                css={css`
                  fill: var(${getColorVarName('onSurface', 'standard')});
                `}
              />
            }
            text={getTranslation('discography')}
          />
          <NavItem
            href={getMembersUrl()}
            icon={
              <MembersIcon
                width={24}
                height={24}
                css={css`
                  fill: var(${getColorVarName('onSurface', 'standard')});
                `}
              />
            }
            text={getTranslation('members')}
          />
          <NavItem
            href={getSearchUrl()}
            icon={
              <SearchIcon
                width={24}
                height={24}
                css={css`
                  fill: var(${getColorVarName('onSurface', 'standard')});
                `}
              />
            }
            text={getTranslation('search')}
          />
        </div>
      </div>
    </nav>
  );
};
