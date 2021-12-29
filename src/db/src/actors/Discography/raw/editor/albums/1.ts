import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createAlbumRaw } from 'db/src/actors/Discography/raw/creators';

export const FIRST_ALBUM: DiscographyRaw = createAlbumRaw({
  title: '透明な色',
  number: '1',
  release: '2015-01-27',
  previousSingle: '10',
  cdTypes: ['A', 'B', 'C'],
  songs: [
    {
      title: 'OVERTURE',
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: 'ぐるぐるカーテン',
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: 'おいでシャンプー',
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: '走れ!Bicycle',
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: '制服のマネキン',
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: '君の名は希望',
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: 'ガールズルール',
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: 'バレッタ',
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: '気づいたら片想い',
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: '夏のFree&Easy',
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: '何度目の青空か?',
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: '誰かは味方',
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: '革命の馬',
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: '僕がいる場所',
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: 'あなたのために弾きたい',
      inCdType: ['A', 'B', 'C'],
    },
    {
      title: '他の星から',
      inCdType: ['A', 'B'],
    },
    {
      title: '私のために 誰かのために',
      inCdType: ['A', 'B'],
    },
    {
      title: 'せっかちなかたつむり',
      inCdType: ['A', 'B'],
    },
    {
      title: '涙がまだ悲しみだった頃',
      inCdType: ['A', 'B'],
    },
    {
      title: '無口なライオン',
      inCdType: ['A', 'B'],
    },
    {
      title: '世界で一番 孤独なLover',
      inCdType: ['A', 'B'],
    },
    {
      title: 'あの日 僕は咄嗟に嘘をついた',
      inCdType: ['A', 'B'],
    },
    {
      title: '13日の金曜日',
      inCdType: ['A', 'B'],
    },
    {
      title: '失いたくないから',
      inCdType: ['A', 'B'],
    },
    {
      title: 'ダンケシェーン',
      inCdType: ['A', 'B'],
    },
    {
      title: '傾斜する',
      inCdType: ['A', 'B'],
    },
    {
      title: 'なぞの落書き',
      inCdType: ['A', 'B'],
    },
    {
      title: '自由の彼方',
      inCdType: ['A', 'B'],
    },
    {
      title: 'ひとりよがり',
      inCdType: ['A', 'B'],
    },
  ],
});
