import { css } from '@emotion/react';
import { Surface } from 'client/components/atoms/Surface';
import { Typography } from 'client/components/atoms/Typography';
import { SettingsMenu } from 'client/components/layout/Page/components/SettingsMenu';
import { TextLink } from 'client/components/molecules/links/TextLink';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { commonStyles } from 'client/styles/tokens';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import {
  getDiscographyUrl,
  getHomeUrl,
  getMembersUrl,
  getSearchUrl,
} from 'client/utils/url';

export const TopNavigationBar: React.FC = () => {
  const { getTranslation } = useTranslations();

  return (
    <Surface
      backgroundColor="standard"
      foregroundColor="standard"
      elevation={componentElevationKey.navigationBar}
      css={css`
        width: 100vw;
        height: ${commonStyles.sizes.navigationBarHeight};
        position: fixed;
        top: 0;
      `}
    >
      <div
        css={css`
          max-width: ${commonStyles.breakPoints.maxContent};
          height: 100%;
          margin: auto;
          padding-top: 0;
          padding-bottom: 0;
          padding-left: calc(
            ${commonStyles.spacing.l} + env(safe-area-inset-left)
          );
          padding-right: calc(
            ${commonStyles.spacing.l} + env(safe-area-inset-right)
          );
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <nav
          aria-label={getTranslation('page')}
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <TextLink
            href={getHomeUrl()}
            typographyVariant="h6"
            showUnderline={false}
          >
            NOGILIB
          </TextLink>
          <Typography
            variant="h6"
            element="span"
            className="large"
            css={css`
              margin: 0 ${commonStyles.spacing.xs};
            `}
          >
            |
          </Typography>
          <div>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
              className="large"
            >
              <TextLink
                href={getDiscographyUrl()}
                typographyVariant="h6"
                showUnderline={false}
                capitalize
              >
                {getTranslation('discography')}
              </TextLink>
              <TextLink
                href={getMembersUrl()}
                typographyVariant="h6"
                showUnderline={false}
                capitalize
              >
                {getTranslation('members')}
              </TextLink>
              <TextLink
                href={getSearchUrl()}
                typographyVariant="h6"
                showUnderline={false}
                capitalize
              >
                {getTranslation('search')}
              </TextLink>
            </div>
          </div>
        </nav>
        <SettingsMenu />
      </div>
    </Surface>
  );
};
