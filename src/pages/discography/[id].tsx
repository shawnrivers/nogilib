import { GetStaticPaths, GetStaticProps } from 'next';
import { AlbumPage } from 'client/templates/Album';
import { arrayToObject } from 'utils/arrays';
import { AlbumPageData } from 'server/pages/album';
import { getAlbumData } from 'api/album';

type PathParams = { id: string };

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const albumData = await getAlbumData();

  return {
    paths: ['ja', 'en', 'zh']
      .map(locale =>
        albumData.map(album => ({
          params: {
            id: album.key,
          },
          locale,
        }))
      )
      .flat(),
    fallback: false,
  };
};

export type AlbumPageProps = Omit<AlbumPageData, 'songs'> & {
  songs: {
    key: AlbumPageData['songs'][0]['key'];
    title: AlbumPageData['songs'][0]['title'];
    type: AlbumPageData['songs'][0]['type'];
    artwork: AlbumPageData['artworks'][0]['url'];
  }[];
};

export const getStaticProps: GetStaticProps<
  AlbumPageProps,
  PathParams
> = async ({ params }) => {
  const albumData = await getAlbumData();

  if (params) {
    const album = albumData.find(album => album.key === params.id);

    if (album) {
      const { songs: rawSongs, ...rest } = album;
      const artworksObject = arrayToObject(album.artworks, 'type');
      const songs: AlbumPageProps['songs'] = rawSongs.map(song => ({
        key: song.key,
        title: song.title,
        type: song.type,
        artwork: artworksObject[song.inCdType[0]].url,
      }));

      return {
        props: {
          id: params?.id ?? '',
          songs,
          ...rest,
        },
      };
    }
  }

  return {
    notFound: true,
  };
};

const AlbumPageContainer: React.FC<AlbumPageProps> = props => {
  return <AlbumPage {...props} />;
};

export default AlbumPageContainer;
