import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import * as React from 'react';
import { BaseButton } from 'client/components/atoms/BaseButton';
import { Surface } from 'client/components/atoms/Surface';
import { Typography } from 'client/components/atoms/Typography';
import { CloseIcon } from 'client/components/atoms/icons/CloseIcon';
import { BottomNavigationBar } from 'client/components/layout/Page/components/BottomNavigationBar';
import { TopNavigationBar } from 'client/components/layout/Page/components/TopNavigationBar';
import { PAGE_CONTENT_ID } from 'client/components/layout/PageContent';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { isDefinedLanguage } from 'client/i18n/utils';
import { commonStyles } from 'client/styles/tokens';
import { getColorVarName } from 'client/styles/tokens/colors';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import { capitalizeFirstLetter } from 'utils/string';

const SkipLink: React.FC = () => {
  const { getTranslation } = useTranslations();

  return (
    <a
      id="skip-link"
      href={`#${PAGE_CONTENT_ID}`}
      css={css`
        top: ${commonStyles.spacing.xs};
        left: calc(${commonStyles.spacing.s} + env(safe-area-inset-left));
        transform: translateY(-170%);
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
        z-index: ${commonStyles.elevations[componentElevationKey.skipLink]
          .zIndex};
        position: absolute;

        &.focus-visible {
          opacity: 1;
          transform: translateY(0%);
          outline: 2px solid transparent;
          outline-offset: 2px;
        }
      `}
    >
      <Surface
        backgroundColor="variant0"
        foregroundColor="standard"
        colorType="primary"
        elevation={componentElevationKey.skipLink}
        css={css`
          display: inline-block;
          border-radius: ${commonStyles.borderRadius.xs};
          overflow: hidden;
        `}
      >
        <div
          css={css`
            padding: ${commonStyles.spacing.s};
          `}
        >
          <Typography
            variant="body2"
            as="span"
            textColor={{ on: 'onPrimary', variant: 'standard' }}
          >
            {capitalizeFirstLetter(getTranslation('skip to content'))}
          </Typography>
        </div>
      </Surface>
    </a>
  );
};

export const Page: React.FC<{ children: React.ReactNode }> = props => {
  const { locale } = useRouter();
  const language = isDefinedLanguage(locale) ? locale : 'en';

  const [noteVisible, setNoteVisible] = React.useState(false);

  const dismissNote = React.useCallback(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('noteDismissed', 'true');
    setNoteVisible(false);
  }, []);

  React.useEffect(() => {
    setNoteVisible(window.localStorage.getItem('noteDismissed') !== 'true');
  }, []);

  return (
    <div
      css={css`
        min-height: 100vh;

        & .large {
          display: inherit;
        }

        & .small {
          display: none;
        }

        @media screen and (max-width: ${commonStyles.breakPoints.sp}) {
          & .large {
            display: none;
          }

          & .small {
            display: inherit;
          }
        }
      `}
    >
      <SkipLink />
      <div
        css={{
          position: 'sticky',
          top: 0,
          zIndex:
            commonStyles.elevations[componentElevationKey.navigationBar].zIndex,
        }}
      >
        {noteVisible && (
          <div
            css={{
              position: 'relative',
              zIndex: 0,
              backgroundColor: `var(${getColorVarName(
                'secondary',
                'standard'
              )})`,
              padding: `${commonStyles.spacing.xs} 40px`,
            }}
          >
            <Typography
              textColor={{
                on: 'onSecondary',
                variant: 'standard',
              }}
              variant="em3"
              as="div"
              css={{
                textAlign: 'center',
                '& > a': {
                  textDecoration: 'underline',
                },
              }}
            >
              {language === 'en' && (
                <>
                  Nogilib has been moved under{' '}
                  <a href="https://nogilib.vercel.app">nogilib.vercel.app</a>,
                  please update your bookmark.
                </>
              )}
              {language === 'ja' && (
                <>
                  Nogilib は{' '}
                  <a href="https://nogilib.vercel.app">nogilib.vercel.app</a>{' '}
                  に移動しました。ブックマークの更新をお願いします。
                </>
              )}
              {language === 'zh' && (
                <>
                  Nogilib 已经迁移到{' '}
                  <a href="https://nogilib.vercel.app">nogilib.vercel.app</a>，
                  请更新你的收藏夹。
                </>
              )}
            </Typography>
            <BaseButton
              backgroundType="primary"
              backgroundColorVariant="standard"
              css={{
                position: 'absolute',
                zIndex: 1,
                top: '50%',
                right: commonStyles.spacing.xxs,
                transform: 'translateY(-50%)',
              }}
              onClick={dismissNote}
            >
              <CloseIcon
                css={{
                  fill: `var(${getColorVarName('onSecondary', 'standard')})`,
                  verticalAlign: 'middle',
                }}
              />
            </BaseButton>
          </div>
        )}
        <TopNavigationBar />
      </div>
      <BottomNavigationBar />
      {props.children}
    </div>
  );
};
