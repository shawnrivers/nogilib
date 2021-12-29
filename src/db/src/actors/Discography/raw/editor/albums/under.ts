import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createAlbumRaw } from 'db/src/actors/Discography/raw/creators';

export const UNDER_ALBUM: DiscographyRaw = createAlbumRaw({
  title: '僕だけの君〜Under Super Best〜',
  number: 'U',
  release: '2018-01-10',
  previousSingle: '19',
  cdTypes: ['L1', 'L2', 'T'],
  songs: [
    {
      title: '左胸の勇気',
      inCdType: ['L1'],
    },
    {
      title: '狼に口笛を',
      inCdType: ['L1'],
    },
    {
      title: '涙がまだ悲しみだった頃',
      inCdType: ['L1'],
    },
    {
      title: '春のメロディー',
      inCdType: ['L1'],
    },
    {
      title: '13日の金曜日',
      inCdType: ['L1'],
    },
    {
      title: '扇風機',
      inCdType: ['L1'],
    },
    {
      title: '初恋の人を今でも',
      inCdType: ['L1'],
    },
    {
      title: '生まれたままで',
      inCdType: ['L1'],
    },
    {
      title: 'ここにいる理由',
      inCdType: ['L1'],
    },
    {
      title: 'あの日 僕は咄嗟に嘘をついた',
      inCdType: ['L1'],
    },
    {
      title: '君は僕と会わない方がよかったのかな',
      inCdType: ['L1'],
    },
    {
      title: '別れ際、もっと好きになる',
      inCdType: ['L1'],
    },
    {
      title: '嫉妬の権利',
      inCdType: ['L1'],
    },
    {
      title: '不等号',
      inCdType: ['L1'],
    },
    {
      title: 'シークレットグラフィティー',
      inCdType: ['L1'],
    },
    {
      title: 'ブランコ',
      inCdType: ['L2'],
    },
    {
      title: '風船は生きている',
      inCdType: ['L2'],
    },
    {
      title: 'アンダー',
      inCdType: ['L2'],
    },
    {
      title: 'My rule',
      inCdType: ['L2'],
    },
    {
      title: '自由の彼方',
      inCdType: ['L2'],
    },
    {
      title: '欲望のリインカーネーション',
      inCdType: ['L2'],
    },
    {
      title: '君が扇いでくれた',
      inCdType: ['L2'],
    },
    {
      title: '自分のこと',
      inCdType: ['L2'],
    },
    {
      title: '自惚れビーチ',
      inCdType: ['L2'],
    },
    {
      title: 'その女',
      inCdType: ['L2'],
    },
    {
      title: '誰よりそばにいたい',
      inCdType: ['L2'],
    },
  ],
});
