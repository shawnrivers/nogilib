import { SongRaw } from "server/actors/Songs/models";
import { createSongRaw } from "server/actors/Songs/raw/creator";
import { SongType } from "server/constants/commons";
import { MemberName } from "server/constants/names";
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
    solo: MemberName.NakamotoHimeka,
  }),
  createSongRaw({
    title: SongTitle.UnuboreBeach,
    type: SongType.Under,
    creators: {
      lyrics: ["秋元康"],
      compose: ["ツキダタダシ"],
      arrange: ["ツキダタダシ"],
    },
    center: [MemberName.SuzukiAyane],
    formations: {
      firstRow: [
        MemberName.ItouKarin,
        MemberName.ItouJunna,
        MemberName.KawagoHina,
        MemberName.KawamuraMahiro,
        MemberName.SaitouChiharu,
        MemberName.SagaraIori,
        MemberName.SasakiKotoko,
        MemberName.SuzukiAyane,
        MemberName.TeradaRanze,
        MemberName.NoujouAmi,
        MemberName.HiguchiHina,
        MemberName.YamazakiRena,
        MemberName.WatanabeMiria,
        MemberName.WadaMaaya,
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
    center: [MemberName.TeradaRanze],
    formations: {
      firstRow: [
        MemberName.ItouKarin,
        MemberName.ItouJunna,
        MemberName.KawagoHina,
        MemberName.KawamuraMahiro,
        MemberName.SaitouChiharu,
        MemberName.SagaraIori,
        MemberName.SasakiKotoko,
        MemberName.SuzukiAyane,
        MemberName.TeradaRanze,
        MemberName.NoujouAmi,
        MemberName.HiguchiHina,
        MemberName.YamazakiRena,
        MemberName.WatanabeMiria,
        MemberName.WadaMaaya,
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
    center: [MemberName.HiguchiHina],
    formations: {
      firstRow: [
        MemberName.ItouKarin,
        MemberName.ItouJunna,
        MemberName.KawagoHina,
        MemberName.KawamuraMahiro,
        MemberName.SaitouChiharu,
        MemberName.SagaraIori,
        MemberName.SasakiKotoko,
        MemberName.SuzukiAyane,
        MemberName.TeradaRanze,
        MemberName.NoujouAmi,
        MemberName.HiguchiHina,
        MemberName.YamazakiRena,
        MemberName.WatanabeMiria,
        MemberName.WadaMaaya,
      ],
    },
  }),
];
