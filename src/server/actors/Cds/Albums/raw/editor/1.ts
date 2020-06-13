import { AlbumRaw } from "server/actors/Cds/Albums/models";
import { createAlbumRaw } from "server/actors/Cds/Albums/raw/creator";
import { CdType } from "server/actors/Cds/constants/cdType";
import { SONGS } from "server/actors/Songs/constants/songTitle";
import { ALBUMS } from "server/actors/Cds/Albums/constants/albumTitle";

export const FIRST_ALBUM: AlbumRaw = createAlbumRaw({
  title: ALBUMS["透明な色"].title,
  number: "1",
  release: "2015-01-27",
  previousSingle: "10",
  cdTypes: [CdType.A, CdType.B, CdType.C],
  songs: [
    {
      title: SONGS["OVERTURE"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      title: SONGS["ぐるぐるカーテン"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      title: SONGS["おいでシャンプー"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      title: SONGS["走れ!Bicycle"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      title: SONGS["制服のマネキン"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      title: SONGS["君の名は希望"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      title: SONGS["ガールズルール"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      title: SONGS["バレッタ"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      title: SONGS["気づいたら片想い"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      title: SONGS["夏のFree&Easy"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      title: SONGS["何度目の青空か?"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      title: SONGS["誰かは味方"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      title: SONGS["革命の馬"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      title: SONGS["僕がいる場所"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      title: SONGS["あなたのために弾きたい"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      title: SONGS["他の星から"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      title: SONGS["私のために 誰かのために"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      title: SONGS["せっかちなかたつむり"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      title: SONGS["涙がまだ悲しみだった頃"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      title: SONGS["無口なライオン"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      title: SONGS["世界で一番 孤独なLover"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      title: SONGS["あの日 僕は咄嗟に嘘をついた"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      title: SONGS["13日の金曜日"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      title: SONGS["失いたくないから"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      title: SONGS["ダンケシェーン"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      title: SONGS["傾斜する"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      title: SONGS["なぞの落書き"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      title: SONGS["自由の彼方"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      title: SONGS["ひとりよがり"].title,
      inCdType: [CdType.A, CdType.B],
    },
  ],
});
