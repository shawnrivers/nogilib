import { SongRaw } from "server/actors/Songs/models";
import { SongType } from "server/constants/commons";
import { SONGS } from "server/constants/songs";
import { createSongRaw } from "server/actors/Songs/raw/creator";

export const OTHER_SONGS: SongRaw[] = [
  createSongRaw({
    title: SONGS["世界中の隣人よ"].title,
    type: SongType.Special,
    creators: {
      lyrics: ["秋元康"],
      compose: ["taka"],
      arrange: ["taka"],
      direct: ["横堀光範"],
    },
  }),
];
