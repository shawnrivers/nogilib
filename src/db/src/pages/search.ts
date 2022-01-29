import { Discography } from 'db/src/actors/Discography';
import { DiscographyResult } from 'db/src/actors/Discography/models';
import { Members } from 'db/src/actors/Members';
import { MemberResult } from 'db/src/actors/Members/models';
import { Songs } from 'db/src/actors/Songs';
import { SongResult } from 'db/src/actors/Songs/models';
import { ImageUrl } from 'db/src/types/commons';

type SearchDoc<T extends 'members' | 'albums' | 'songs'> = {
  id: string;
  field: string;
  searchType: T;
};

export type SearchPageData = {
  albums: (SearchDoc<'albums'> & {
    key: DiscographyResult['key'];
    title: DiscographyResult['title'];
    number: DiscographyResult['number'];
    albumType: DiscographyResult['type'];
    artwork: ImageUrl;
  })[];
  songs: (SearchDoc<'songs'> & {
    key: SongResult['key'];
    title: SongResult['title'];
    songType: SongResult['type'];
    single: SongResult['single'];
    albums: SongResult['albums'];
    artwork: ImageUrl;
  })[];
  members: (SearchDoc<'members'> & {
    name: MemberResult['name'];
    nameNotations: MemberResult['nameNotations'];
    join: MemberResult['join'];
    profileImage: ImageUrl;
  })[];
};

export function getSearchPageData(
  discography: Discography,
  songs: Songs,
  members: Members
): SearchPageData[] {
  if (!discography.isConverted) {
    throw new Error('Please convert Discography data at first.');
  }

  if (!songs.isConverted) {
    throw new Error('Please convert Songs data at first.');
  }

  if (!members.isConverted) {
    throw new Error('Please convert Members data at first.');
  }

  const albumsData: SearchPageData['albums'] = discography.result.map(
    album => ({
      id: `${album.type}-${album.key}`,
      field: `${album.title} ${album.key}`,
      searchType: 'albums',
      key: album.key,
      title: album.title,
      number: album.number,
      albumType: album.type,
      artwork: album.artworks[0].url,
    })
  );

  const songsData: SearchPageData['songs'] = songs.result.map(song => ({
    id: `song-${song.key}`,
    field: `${song.title} ${song.key}`,
    searchType: 'songs',
    key: song.key,
    title: song.title,
    songType: song.type,
    single: song.single,
    albums: song.albums,
    artwork: song.artwork,
  }));

  const membersData: SearchPageData['members'] = members.result.map(member => {
    const { nameNotations } = member;
    return {
      id: `member-${member.name}`,
      field: `${nameNotations.lastName}${nameNotations.firstName} ${nameNotations.lastNameFurigana}${nameNotations.firstNameFurigana} ${nameNotations.lastNameEn} ${nameNotations.firstNameEn}`,
      searchType: 'members',
      name: member.name,
      nameNotations,
      join: member.join,
      profileImage: member.profileImages.gallery[0],
    };
  });

  return [
    {
      albums: albumsData,
      songs: songsData,
      members: membersData,
    },
  ];
}
