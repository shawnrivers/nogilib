import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { SongType } from "server/constants/commons";
import { MemberNameKey } from "server/constants/names";
import { SongTitle } from "server/constants/songs";

export const FOURTH_ALBUM_SONGS: SongRaw[] = [
  createSongRaw({
    title: SongTitle.Jibunnokoto,
    type: SongType.Solo,
    creators: {
      lyrics: ["秋元康"],
      compose: ["小松清人"],
      arrange: ["小松清人"],
    },
    solo: MemberNameKey.NakamotoHimeka,
  }),
  createSongRaw({
    title: SongTitle.UnuboreBeach,
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
    title: SongTitle.Sonohito,
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
    title: SongTitle.Dareyorimosobaniitai,
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
