import { css } from '@emotion/react';
import { AspectRatioImage } from 'client/components/atoms/image/AspectRatioImage';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { Card, CardProps } from 'client/components/atoms/Card';
import { commonStyles } from 'client/styles/tokens';
import { useIntl } from 'client/i18n/hooks/useIntl';
import { DiscographyType } from 'db/src/actors/Discography/types';
import { ImageUrl } from 'db/src/types/commons';

export const ArtworkCard: React.FC<
  Omit<CardProps, 'children'> & {
    title: string;
    titleElement?: TypographyProps['as'];
    number: string;
    type: DiscographyType;
    image: ImageUrl;
    width: number;
  }
> = props => {
  const {
    image,
    title,
    titleElement = 'div',
    borderRadius = 'm',
    number,
    type,
    width,
    ...cardProps
  } = props;

  const { formatAlbumType } = useIntl();
  const caption = formatAlbumType(type, number);

  return (
    <Card
      aria-label={title}
      borderRadius={borderRadius}
      css={css`
        width: ${width}px;
      `}
      {...cardProps}
    >
      <article>
        <AspectRatioImage
          src={image.lg}
          srcSet={`${image.sm}, ${image.md} 2x, ${image.lg} 3x`}
          alt=""
          role="presentation"
          aspectRatio={1}
          loading="lazy"
          css={css`
            border-radius: ${commonStyles.borderRadius[borderRadius]};
          `}
        />
        <Typography
          variant="h7"
          as="div"
          textColor={{ on: 'onBackground', variant: 'variant1' }}
          capitalize
          css={css`
            display: block;
            margin-top: 0.5em;
            line-height: 1.2;
            text-align: center;
          `}
        >
          {caption}
        </Typography>
        <Typography
          variant="em2"
          as={titleElement}
          ellipsis
          css={css`
            display: block;
            margin-top: 0.5em;
            line-height: 1.2;
            text-align: center;
          `}
          lang="ja"
        >
          {title}
        </Typography>
      </article>
    </Card>
  );
};
