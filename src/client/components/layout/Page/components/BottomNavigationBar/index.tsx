/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
import { Surface } from 'client/components/atoms/Surface';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import {
  getDiscographyUrl,
  getMembersUrl,
  getSearchUrl,
} from 'client/utils/url';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { DiscographyIcon } from 'client/components/atoms/icons/DiscographyIcon';
import { MembersIcon } from 'client/components/atoms/icons/MembersIcon';
import { SearchIcon } from 'client/components/atoms/icons/SearchIcon';
import { BaseLink } from 'client/components/atoms/BaseLink';
import { Typography } from 'client/components/atoms/Typography';

export const BottomNavigationBar: React.FC = () => {
  const { getTranslation } = useTranslations();

  return (
    <nav className="small">
      <Surface
        backgroundColor="standard"
        foregroundColor="standard"
        elevation={componentElevationKey.navigationBar}
        css={css`
          width: 100vw;
          position: fixed;
          bottom: 0;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.5em 0.5em 0.3em;

            & > * {
              flex: 1;
              text-align: center;
            }
          `}
        >
          <BaseLink
            href={getDiscographyUrl()}
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <DiscographyIcon width={24} height={24} />
            <Typography
              variant="body4"
              capitalize
              css={css`
                margin-top: 0.3em;
                height: 20px;
                white-space: nowrap;
              `}
            >
              {getTranslation('discography')}
            </Typography>
          </BaseLink>
          <BaseLink
            href={getMembersUrl()}
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <MembersIcon width={24} height={24} />
            <Typography
              variant="body4"
              capitalize
              css={css`
                margin-top: 0.3em;
                height: 20px;
                white-space: nowrap;
              `}
            >
              {getTranslation('members')}
            </Typography>
          </BaseLink>
          <BaseLink
            href={getSearchUrl()}
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <SearchIcon width={24} height={24} />
            <Typography
              variant="body4"
              capitalize
              css={css`
                margin-top: 0.3em;
                height: 20px;
                white-space: nowrap;
              `}
            >
              {getTranslation('search')}
            </Typography>
          </BaseLink>
        </div>
      </Surface>
    </nav>
  );
};
