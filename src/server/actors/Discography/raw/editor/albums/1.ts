import { DiscographyRaw } from 'server/actors/Discography/models';
import { createAlbumRaw } from 'server/actors/Discography/raw/creators';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const FIRST_ALBUM: DiscographyRaw = createAlbumRaw({
  title: '透明な色',
  number: '1',
  release: '2015-01-27',
  previousSingle: '10',
  cdTypes: ['A', 'B', 'C'],
  songs: [
    {
      title: SONGS['OVERTURE'].title,
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: SONGS['ぐるぐるカーテン'].title,
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: SONGS['おいでシャンプー'].title,
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: SONGS['走れ!Bicycle'].title,
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: SONGS['制服のマネキン'].title,
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: SONGS['君の名は希望'].title,
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: SONGS['ガールズルール'].title,
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: SONGS['バレッタ'].title,
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: SONGS['気づいたら片想い'].title,
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: SONGS['夏のFree&Easy'].title,
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: SONGS['何度目の青空か?'].title,
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: SONGS['誰かは味方'].title,
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: SONGS['革命の馬'].title,
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: SONGS['僕がいる場所'].title,
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: SONGS['あなたのために弾きたい'].title,
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: SONGS['他の星から'].title,
      inCdType: ['A', 'B'],
    },
    {
      title: SONGS['私のために 誰かのために'].title,
      inCdType: ['A', 'B'],
    },
    {
      title: SONGS['せっかちなかたつむり'].title,
      inCdType: ['A', 'B'],
    },
    {
      title: SONGS['涙がまだ悲しみだった頃'].title,
      inCdType: ['A', 'B'],
    },
    {
      title: SONGS['無口なライオン'].title,
      inCdType: ['A', 'B'],
    },
    {
      title: SONGS['世界で一番 孤独なLover'].title,
      inCdType: ['A', 'B'],
    },
    {
      title: SONGS['あの日 僕は咄嗟に嘘をついた'].title,
      inCdType: ['A', 'B'],
    },
    {
      title: SONGS['13日の金曜日'].title,
      inCdType: ['A', 'B'],
    },
    {
      title: SONGS['失いたくないから'].title,
      inCdType: ['A', 'B'],
    },
    {
      title: SONGS['ダンケシェーン'].title,
      inCdType: ['A', 'B'],
    },
    {
      title: SONGS['傾斜する'].title,
      inCdType: ['A', 'B'],
    },
    {
      title: SONGS['なぞの落書き'].title,
      inCdType: ['A', 'B'],
    },
    {
      title: SONGS['自由の彼方'].title,
      inCdType: ['A', 'B'],
    },
    {
      title: SONGS['ひとりよがり'].title,
      inCdType: ['A', 'B'],
    },
  ],
});
