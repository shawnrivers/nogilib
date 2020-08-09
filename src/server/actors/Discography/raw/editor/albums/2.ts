import { createAlbumRaw } from 'server/actors/Discography/raw/creators';
import { DiscographyRaw } from 'server/actors/Discography/models';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

export const SECOND_ALBUM: DiscographyRaw = createAlbumRaw({
  title: 'それぞれの椅子',
  number: '2',
  release: '2016-05-25',
  previousSingle: '14',
  cdTypes: ['A', 'B', 'C', 'D', 'T'],
  songs: [
    {
      title: SONGS['命は美しい'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['太陽ノック'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['今、話したい誰かがいる'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['きっかけ'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['太陽に口説かれて'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['欲望のリインカーネーション'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['悲しみの忘れ方'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['空気感'].title,
      inCdType: ['A', 'T'],
    },
    {
      title: SONGS['光合成希望'].title,
      inCdType: ['A', 'T'],
    },
    {
      title: SONGS['無表情'].title,
      inCdType: ['A', 'T'],
    },
    {
      title: SONGS['あらかじめ語られるロマンス'].title,
      inCdType: ['A', 'T'],
    },
    {
      title: SONGS['隙間'].title,
      inCdType: ['A', 'T'],
    },
    {
      title: SONGS['急斜面'].title,
      inCdType: ['A', 'T'],
    },
    {
      title: SONGS['羽根の記憶'].title,
      inCdType: ['A', 'T'],
    },
    {
      title: SONGS['乃木坂の詩'].title,
      inCdType: ['A', 'B', 'C', 'D', 'T'],
    },
    {
      title: SONGS['Threefold choice'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['低体温のキス'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['遥かなるブータン'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['ポピパッパパー'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['制服を脱いでサヨナラを…'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['憂鬱と風船ガム'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['立ち直り中'].title,
      inCdType: ['B'],
    },
    {
      title: SONGS['失恋したら、顔を洗え!'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['かき氷の片想い'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['大人への近道'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['君は僕と会わない方がよかったのかな'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['別れ際、もっと好きになる'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['嫉妬の権利'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['不等号'].title,
      inCdType: ['C'],
    },
    {
      title: SONGS['環状六号線'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['口約束'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['ロマンティックいか焼き'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['ハウス!'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['そんなバカな…'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['シャキイズム'].title,
      inCdType: ['D'],
    },
    {
      title: SONGS['ロマンスのスタート'].title,
      inCdType: ['D'],
    },
  ],
});
