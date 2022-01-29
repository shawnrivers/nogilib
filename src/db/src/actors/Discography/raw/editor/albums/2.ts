import { createAlbumRaw } from 'db/src/actors/Discography/raw/creators';
import { DiscographyRaw } from 'db/src/actors/Discography/models';

export const SECOND_ALBUM: DiscographyRaw = createAlbumRaw({
  title: 'それぞれの椅子',
  number: '2',
  release: '2016-05-25',
  previousSingle: '14',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: '命は美しい',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '太陽ノック',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '今、話したい誰かがいる',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'きっかけ',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '太陽に口説かれて',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '欲望のリインカーネーション',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '悲しみの忘れ方',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: '空気感',
      inCdType: ['A', 'T'],
    },
    {
      title: '光合成希望',
      inCdType: ['A', 'T'],
    },
    {
      title: '無表情',
      inCdType: ['A', 'T'],
    },
    {
      title: 'あらかじめ語られるロマンス',
      inCdType: ['A', 'T'],
    },
    {
      title: '隙間',
      inCdType: ['A', 'T'],
    },
    {
      title: '急斜面',
      inCdType: ['A', 'T'],
    },
    {
      title: '羽根の記憶',
      inCdType: ['A', 'T'],
    },
    {
      title: '乃木坂の詩',
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: 'Threefold choice',
      inCdType: ['B'],
    },
    {
      title: '低体温のキス',
      inCdType: ['B'],
    },
    {
      title: '遥かなるブータン',
      inCdType: ['B'],
    },
    {
      title: 'ポピパッパパー',
      inCdType: ['B'],
    },
    {
      title: '制服を脱いでサヨナラを…',
      inCdType: ['B'],
    },
    {
      title: '憂鬱と風船ガム',
      inCdType: ['B'],
    },
    {
      title: '立ち直り中',
      inCdType: ['B'],
    },
    {
      title: '失恋したら、顔を洗え!',
      inCdType: ['C'],
    },
    {
      title: 'かき氷の片想い',
      inCdType: ['C'],
    },
    {
      title: '大人への近道',
      inCdType: ['C'],
    },
    {
      title: '君は僕と会わない方がよかったのかな',
      inCdType: ['C'],
    },
    {
      title: '別れ際、もっと好きになる',
      inCdType: ['C'],
    },
    {
      title: '嫉妬の権利',
      inCdType: ['C'],
    },
    {
      title: '不等号',
      inCdType: ['C'],
    },
    {
      title: '環状六号線',
      inCdType: ['D'],
    },
    {
      title: '口約束',
      inCdType: ['D'],
    },
    {
      title: 'ロマンティックいか焼き',
      inCdType: ['D'],
    },
    {
      title: 'ハウス!',
      inCdType: ['D'],
    },
    {
      title: 'そんなバカな…',
      inCdType: ['D'],
    },
    {
      title: 'シャキイズム',
      inCdType: ['D'],
    },
    {
      title: 'ロマンスのスタート',
      inCdType: ['D'],
    },
  ],
});
