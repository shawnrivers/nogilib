import { DiscographyRaw } from 'server/actors/Discography/models';
import { createAlbumRaw } from 'server/actors/Discography/raw/creators';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const UNDER_ALBUM: DiscographyRaw = createAlbumRaw({
  title: '僕だけの君〜Under Super Best〜',
  number: 'U',
  release: '2018-01-10',
  previousSingle: '19',
  cdTypes: ['L1', 'L2', 'T'],
  songs: [
    {
      title: SONGS['左胸の勇気'].title,
      inCdType: ['L1'],
    },
    {
      title: SONGS['狼に口笛を'].title,
      inCdType: ['L1'],
    },
    {
      title: SONGS['涙がまだ悲しみだった頃'].title,
      inCdType: ['L1'],
    },
    {
      title: SONGS['春のメロディー'].title,
      inCdType: ['L1'],
    },
    {
      title: SONGS['13日の金曜日'].title,
      inCdType: ['L1'],
    },
    {
      title: SONGS['扇風機'].title,
      inCdType: ['L1'],
    },
    {
      title: SONGS['初恋の人を今でも'].title,
      inCdType: ['L1'],
    },
    {
      title: SONGS['生まれたままで'].title,
      inCdType: ['L1'],
    },
    {
      title: SONGS['ここにいる理由'].title,
      inCdType: ['L1'],
    },
    {
      title: SONGS['あの日 僕は咄嗟に嘘をついた'].title,
      inCdType: ['L1'],
    },
    {
      title: SONGS['君は僕と会わない方がよかったのかな'].title,
      inCdType: ['L1'],
    },
    {
      title: SONGS['別れ際、もっと好きになる'].title,
      inCdType: ['L1'],
    },
    {
      title: SONGS['嫉妬の権利'].title,
      inCdType: ['L1'],
    },
    {
      title: SONGS['不等号'].title,
      inCdType: ['L1'],
    },
    {
      title: SONGS['シークレットグラフィティー'].title,
      inCdType: ['L1'],
    },
    {
      title: SONGS['ブランコ'].title,
      inCdType: ['L2'],
    },
    {
      title: SONGS['風船は生きている'].title,
      inCdType: ['L2'],
    },
    {
      title: SONGS['アンダー'].title,
      inCdType: ['L2'],
    },
    {
      title: SONGS['My rule'].title,
      inCdType: ['L2'],
    },
    {
      title: SONGS['自由の彼方'].title,
      inCdType: ['L2'],
    },
    {
      title: SONGS['欲望のリインカーネーション'].title,
      inCdType: ['L2'],
    },
    {
      title: SONGS['君が扇いでくれた'].title,
      inCdType: ['L2'],
    },
    {
      title: SONGS['自分のこと'].title,
      inCdType: ['L2'],
    },
    {
      title: SONGS['自惚れビーチ'].title,
      inCdType: ['L2'],
    },
    {
      title: SONGS['その女'].title,
      inCdType: ['L2'],
    },
    {
      title: SONGS['誰よりそばにいたい'].title,
      inCdType: ['L2'],
    },
  ],
});
