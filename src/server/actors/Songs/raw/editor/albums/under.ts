import { MemberNameKey } from "server/actors/Members/constants/memberNames";
import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { SongType } from "server/constants/commons";
import { SONGS } from "server/actors/Songs/constants/songTitles";

export const UNDER_ALBUM_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS["自分のこと"].title,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["小松清人"],
      arrange: ["小松清人"],
    },
    solo: MemberNameKey.NakamotoHimeka,
  }),
  createSongRaw({
    title: SONGS["自惚れビーチ"].title,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["ツキダタダシ"],
      arrange: ["ツキダタダシ"],
    },
    center: [MemberNameKey.SuzukiAyane],
    formations: {
      firstRow: [
        MemberNameKey.ItouKarin,
        MemberNameKey.ItouJunna,
        MemberNameKey.KawagoHina,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.SagaraIori,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.TeradaRanze,
        MemberNameKey.NoujouAmi,
        MemberNameKey.HiguchiHina,
        MemberNameKey.YamazakiRena,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["その女"].title,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["HRK"],
      arrange: ["APAZZI"],
    },
    center: [MemberNameKey.TeradaRanze],
    formations: {
      firstRow: [
        MemberNameKey.ItouKarin,
        MemberNameKey.ItouJunna,
        MemberNameKey.KawagoHina,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.SagaraIori,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.TeradaRanze,
        MemberNameKey.NoujouAmi,
        MemberNameKey.HiguchiHina,
        MemberNameKey.YamazakiRena,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
  createSongRaw({
    title: SONGS["誰よりそばにいたい"].title,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["岩崎哲也"],
      arrange: ["関根佑樹"],
    },
    center: [MemberNameKey.HiguchiHina],
    formations: {
      firstRow: [
        MemberNameKey.ItouKarin,
        MemberNameKey.ItouJunna,
        MemberNameKey.KawagoHina,
        MemberNameKey.KawamuraMahiro,
        MemberNameKey.SaitouChiharu,
        MemberNameKey.SagaraIori,
        MemberNameKey.SasakiKotoko,
        MemberNameKey.SuzukiAyane,
        MemberNameKey.TeradaRanze,
        MemberNameKey.NoujouAmi,
        MemberNameKey.HiguchiHina,
        MemberNameKey.YamazakiRena,
        MemberNameKey.WatanabeMiria,
        MemberNameKey.WadaMaaya,
      ],
    },
  }),
];
