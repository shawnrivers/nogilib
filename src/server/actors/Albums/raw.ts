import { AlbumRaw, AlbumsRawArray } from "server/actors/Albums/models";
import { CdType } from "server/constants/commons";
import { SONGS } from "server/constants/songs";

const imagaomoideninarumade: AlbumRaw = {
  title: "今が思い出になるまで",
  number: "4",
  release: "2019-04-17",
  previousSingleNumber: "22",
  hasArtworks: true,
  artworkTypes: [CdType.L, CdType.A, CdType.B, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["ありがちな恋愛"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 2,
      title: SONGS["逃げ水"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 3,
      title: SONGS["いつかできるから今日できる"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 4,
      title: SONGS["シンクロニシティ"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 5,
      title: SONGS["ジコチューで行こう!"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 6,
      title: SONGS["帰り道は遠回りしたくなる"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 7,
      title: SONGS["アンダー"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 8,
      title: SONGS["My rule"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 9,
      title: SONGS["新しい世界"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 10,
      title: SONGS["三角の空き地"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 11,
      title: SONGS["日常"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 12,
      title: SONGS["もし君がいなければ"].title,
      inCdType: [CdType.L],
    },
    {
      number: 13,
      title: SONGS["キスの手裏剣"].title,
      inCdType: [CdType.L],
    },
    {
      number: 14,
      title: SONGS["Against"].title,
      inCdType: [CdType.L],
    },
    {
      number: 15,
      title: SONGS["つづく"].title,
      inCdType: [CdType.L],
    },
    {
      number: 16,
      title: SONGS["頬杖をついては眠れない"].title,
      inCdType: [CdType.A],
    },
    {
      number: 17,
      title: SONGS["ぼっち党"].title,
      inCdType: [CdType.A],
    },
    {
      number: 18,
      title: SONGS["僕の衝動"].title,
      inCdType: [CdType.A],
    },
    {
      number: 19,
      title: SONGS["スカウトマン"].title,
      inCdType: [CdType.A],
    },
    {
      number: 20,
      title: SONGS["さゆりんご募集中"].title,
      inCdType: [CdType.B],
    },
    {
      number: 21,
      title: SONGS["ゴルゴンゾーラ"].title,
      inCdType: [CdType.B],
    },
    {
      number: 22,
      title: SONGS["トキトキメキメキ"].title,
      inCdType: [CdType.B],
    },
    {
      number: 23,
      title: SONGS["未来の答え"].title,
      inCdType: [CdType.B],
    },
    {
      number: 24,
      title: SONGS["もうすぐ～ザンビ伝説～"].title,
      inCdType: [CdType.T],
    },
    {
      number: 25,
      title: SONGS["キャラバンは眠らない"].title,
      inCdType: [CdType.T],
    },
    {
      number: 26,
      title: SONGS["ライブ神"].title,
      inCdType: [CdType.T],
    },
    {
      number: 27,
      title: SONGS["自分じゃない感じ"].title,
      inCdType: [CdType.T],
    },
  ],
};

const bokudakenokimi: AlbumRaw = {
  title: "僕だけの君〜Under Super Best〜",
  number: "U",
  release: "2018-01-10",
  previousSingleNumber: "19",
  hasArtworks: true,
  artworkTypes: [CdType.L1, CdType.L2, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["左胸の勇気"].title,
      inCdType: [CdType.L1],
    },
    {
      number: 2,
      title: SONGS["狼に口笛を"].title,
      inCdType: [CdType.L1],
    },
    {
      number: 3,
      title: SONGS["涙がまだ悲しみだった頃"].title,
      inCdType: [CdType.L1],
    },
    {
      number: 4,
      title: SONGS["春のメロディー"].title,
      inCdType: [CdType.L1],
    },
    {
      number: 5,
      title: SONGS["13日の金曜日"].title,
      inCdType: [CdType.L1],
    },
    {
      number: 6,
      title: SONGS["扇風機"].title,
      inCdType: [CdType.L1],
    },
    {
      number: 7,
      title: SONGS["初恋の人を今でも"].title,
      inCdType: [CdType.L1],
    },
    {
      number: 8,
      title: SONGS["生まれたままで"].title,
      inCdType: [CdType.L1],
    },
    {
      number: 9,
      title: SONGS["ここにいる理由"].title,
      inCdType: [CdType.L1],
    },
    {
      number: 10,
      title: SONGS["あの日 僕は咄嗟に嘘をついた"].title,
      inCdType: [CdType.L1],
    },
    {
      number: 11,
      title: SONGS["君は僕と会わない方がよかったのかな"].title,
      inCdType: [CdType.L1],
    },
    {
      number: 12,
      title: SONGS["別れ際、もっと好きになる"].title,
      inCdType: [CdType.L1],
    },
    {
      number: 13,
      title: SONGS["嫉妬の権利"].title,
      inCdType: [CdType.L1],
    },
    {
      number: 14,
      title: SONGS["不等号"].title,
      inCdType: [CdType.L1],
    },
    {
      number: 15,
      title: SONGS["シークレットグラフィティー"].title,
      inCdType: [CdType.L1],
    },
    {
      number: 16,
      title: SONGS["ブランコ"].title,
      inCdType: [CdType.L2],
    },
    {
      number: 17,
      title: SONGS["風船は生きている"].title,
      inCdType: [CdType.L2],
    },
    {
      number: 18,
      title: SONGS["アンダー"].title,
      inCdType: [CdType.L2],
    },
    {
      number: 19,
      title: SONGS["My rule"].title,
      inCdType: [CdType.L2],
    },
    {
      number: 20,
      title: SONGS["自由の彼方"].title,
      inCdType: [CdType.L2],
    },
    {
      number: 21,
      title: SONGS["欲望のリインカーネーション"].title,
      inCdType: [CdType.L2],
    },
    {
      number: 22,
      title: SONGS["君が扇いでくれた"].title,
      inCdType: [CdType.L2],
    },
    {
      number: 23,
      title: SONGS["自分のこと"].title,
      inCdType: [CdType.L2],
    },
    {
      number: 24,
      title: SONGS["自惚れビーチ"].title,
      inCdType: [CdType.L2],
    },
    {
      number: 25,
      title: SONGS["その女"].title,
      inCdType: [CdType.L2],
    },
    {
      number: 26,
      title: SONGS["誰よりそばにいたい"].title,
      inCdType: [CdType.L2],
    },
  ],
};

const umaretekara: AlbumRaw = {
  title: "生まれてから初めて見た夢",
  number: "3",
  release: "2017-05-24",
  previousSingleNumber: "17",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.L, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["裸足でSummer"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 2,
      title: SONGS["サヨナラの意味"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 3,
      title: SONGS["インフルエンサー"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 4,
      title: SONGS["シークレットグラフィティー"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 5,
      title: SONGS["ブランコ"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 6,
      title: SONGS["風船は生きている"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 7,
      title: SONGS["スカイダイビング"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 8,
      title: SONGS["三番目の風"].title,
      inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
    },
    {
      number: 9,
      title: SONGS["君が扇いでくれた"].title,
      inCdType: [CdType.L],
    },
    {
      number: 10,
      title: SONGS["思い出ファースト"].title,
      inCdType: [CdType.L],
    },
    {
      number: 11,
      title: SONGS["設定温度"].title,
      inCdType: [CdType.L],
    },
    {
      number: 12,
      title: SONGS["孤独な青空"].title,
      inCdType: [CdType.L],
    },
    {
      number: 13,
      title: SONGS["僕だけの光"].title,
      inCdType: [CdType.L],
    },
    {
      number: 14,
      title: SONGS["人生を考えたくなる"].title,
      inCdType: [CdType.L],
    },
    {
      number: 15,
      title: SONGS["意外BREAK"].title,
      inCdType: [CdType.L],
    },
    {
      number: 16,
      title: SONGS["Rewindあの日"].title,
      inCdType: [CdType.A],
    },
    {
      number: 17,
      title: SONGS["ごめんね、スムージー"].title,
      inCdType: [CdType.A],
    },
    {
      number: 18,
      title: SONGS["醜い私"].title,
      inCdType: [CdType.A],
    },
    {
      number: 19,
      title: SONGS["オフショアガール"].title,
      inCdType: [CdType.A],
    },
    {
      number: 20,
      title: SONGS["君に贈る花がない"].title,
      inCdType: [CdType.A],
    },
    {
      number: 21,
      title: SONGS["白米様"].title,
      inCdType: [CdType.A],
    },
    {
      number: 22,
      title: SONGS["硬い殻のように抱きしめたい"].title,
      inCdType: [CdType.B],
    },
    {
      number: 23,
      title: SONGS["満月が消えた"].title,
      inCdType: [CdType.B],
    },
    {
      number: 24,
      title: SONGS["ワタボコリ"].title,
      inCdType: [CdType.B],
    },
    {
      number: 25,
      title: SONGS["ないものねだり"].title,
      inCdType: [CdType.B],
    },
    {
      number: 26,
      title: SONGS["Another Ghost"].title,
      inCdType: [CdType.B],
    },
    {
      number: 27,
      title: SONGS["あの教室"].title,
      inCdType: [CdType.B],
    },
    {
      number: 28,
      title: SONGS["流星ディスコティック"].title,
      inCdType: [CdType.T],
    },
    {
      number: 29,
      title: SONGS["忘却と美学"].title,
      inCdType: [CdType.T],
    },
    {
      number: 30,
      title: SONGS["2度目のキスから"].title,
      inCdType: [CdType.T],
    },
    {
      number: 31,
      title: SONGS["命の真実 ミュージカル「林檎売りとカメムシ」"].title,
      inCdType: [CdType.T],
    },
    {
      number: 32,
      title: SONGS["行くあてのない僕たち"].title,
      inCdType: [CdType.T],
    },
    {
      number: 33,
      title: SONGS["当たり障りのない話"].title,
      inCdType: [CdType.T],
    },
  ],
};

const sorezorenoisu: AlbumRaw = {
  title: "それぞれの椅子",
  number: "2",
  release: "2016-05-25",
  previousSingleNumber: "14",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["命は美しい"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 2,
      title: SONGS["太陽ノック"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 3,
      title: SONGS["今、話したい誰かがいる"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 4,
      title: SONGS["きっかけ"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 5,
      title: SONGS["太陽に口説かれて"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 6,
      title: SONGS["欲望のリインカーネーション"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 7,
      title: SONGS["悲しみの忘れ方"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 8,
      title: SONGS["空気感"].title,
      inCdType: [CdType.A, CdType.T],
    },
    {
      number: 9,
      title: SONGS["光合成希望"].title,
      inCdType: [CdType.A, CdType.T],
    },
    {
      number: 10,
      title: SONGS["無表情"].title,
      inCdType: [CdType.A, CdType.T],
    },
    {
      number: 11,
      title: SONGS["あらかじめ語られるロマンス"].title,
      inCdType: [CdType.A, CdType.T],
    },
    {
      number: 12,
      title: SONGS["隙間"].title,
      inCdType: [CdType.A, CdType.T],
    },
    {
      number: 13,
      title: SONGS["急斜面"].title,
      inCdType: [CdType.A, CdType.T],
    },
    {
      number: 14,
      title: SONGS["羽根の記憶"].title,
      inCdType: [CdType.A, CdType.T],
    },
    {
      number: 15,
      title: SONGS["乃木坂の詩"].title,
      inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    },
    {
      number: 16,
      title: SONGS["Threefold choice"].title,
      inCdType: [CdType.B],
    },
    {
      number: 17,
      title: SONGS["低体温のキス"].title,
      inCdType: [CdType.B],
    },
    {
      number: 18,
      title: SONGS["遥かなるブータン"].title,
      inCdType: [CdType.B],
    },
    {
      number: 19,
      title: SONGS["ポピパッパパー"].title,
      inCdType: [CdType.B],
    },
    {
      number: 20,
      title: SONGS["制服を脱いでサヨナラを…"].title,
      inCdType: [CdType.B],
    },
    {
      number: 21,
      title: SONGS["憂鬱と風船ガム"].title,
      inCdType: [CdType.B],
    },
    {
      number: 22,
      title: SONGS["立ち直り中"].title,
      inCdType: [CdType.B],
    },
    {
      number: 23,
      title: SONGS["失恋したら、顔を洗え!"].title,
      inCdType: [CdType.C],
    },
    {
      number: 24,
      title: SONGS["かき氷の片想い"].title,
      inCdType: [CdType.C],
    },
    {
      number: 25,
      title: SONGS["大人への近道"].title,
      inCdType: [CdType.C],
    },
    {
      number: 26,
      title: SONGS["君は僕と会わない方がよかったのかな"].title,
      inCdType: [CdType.C],
    },
    {
      number: 27,
      title: SONGS["別れ際、もっと好きになる"].title,
      inCdType: [CdType.C],
    },
    {
      number: 28,
      title: SONGS["嫉妬の権利"].title,
      inCdType: [CdType.C],
    },
    {
      number: 29,
      title: SONGS["不等号"].title,
      inCdType: [CdType.C],
    },
    {
      number: 30,
      title: SONGS["環状六号線"].title,
      inCdType: [CdType.D],
    },
    {
      number: 31,
      title: SONGS["口約束"].title,
      inCdType: [CdType.D],
    },
    {
      number: 32,
      title: SONGS["ロマンティックいか焼き"].title,
      inCdType: [CdType.D],
    },
    {
      number: 33,
      title: SONGS["ハウス!"].title,
      inCdType: [CdType.D],
    },
    {
      number: 34,
      title: SONGS["そんなバカな…"].title,
      inCdType: [CdType.D],
    },
    {
      number: 35,
      title: SONGS["シャキイズム"].title,
      inCdType: [CdType.D],
    },
    {
      number: 36,
      title: SONGS["ロマンスのスタート"].title,
      inCdType: [CdType.D],
    },
  ],
};

const tomeinairo: AlbumRaw = {
  title: "透明な色",
  number: "1",
  release: "2015-01-27",
  previousSingleNumber: "10",
  hasArtworks: true,
  artworkTypes: [CdType.A, CdType.B, CdType.C],
  shopping: [],
  songs: [
    {
      number: 1,
      title: SONGS["OVERTURE"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      number: 2,
      title: SONGS["ぐるぐるカーテン"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      number: 3,
      title: SONGS["おいでシャンプー"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      number: 4,
      title: SONGS["走れ!Bicycle"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      number: 5,
      title: SONGS["制服のマネキン"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      number: 6,
      title: SONGS["君の名は希望"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      number: 7,
      title: SONGS["ガールズルール"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      number: 8,
      title: SONGS["バレッタ"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      number: 9,
      title: SONGS["気づいたら片想い"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      number: 10,
      title: SONGS["夏のFree&Easy"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      number: 11,
      title: SONGS["何度目の青空か?"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      number: 12,
      title: SONGS["誰かは味方"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      number: 13,
      title: SONGS["革命の馬"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      number: 14,
      title: SONGS["僕がいる場所"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      number: 15,
      title: SONGS["あなたのために弾きたい"].title,
      inCdType: [CdType.A, CdType.B, CdType.C],
    },
    {
      number: 16,
      title: SONGS["他の星から"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      number: 17,
      title: SONGS["私のために 誰かのために"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      number: 18,
      title: SONGS["せっかちなかたつむり"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      number: 19,
      title: SONGS["涙がまだ悲しみだった頃"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      number: 20,
      title: SONGS["無口なライオン"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      number: 21,
      title: SONGS["世界で一番 孤独なLover"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      number: 22,
      title: SONGS["あの日 僕は咄嗟に嘘をついた"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      number: 23,
      title: SONGS["13日の金曜日"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      number: 24,
      title: SONGS["失いたくないから"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      number: 25,
      title: SONGS["ダンケシェーン"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      number: 26,
      title: SONGS["傾斜する"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      number: 27,
      title: SONGS["なぞの落書き"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      number: 28,
      title: SONGS["自由の彼方"].title,
      inCdType: [CdType.A, CdType.B],
    },
    {
      number: 29,
      title: SONGS["ひとりよがり"].title,
      inCdType: [CdType.A, CdType.B],
    },
  ],
};

export const albumsRawArray: AlbumsRawArray = [
  imagaomoideninarumade,
  bokudakenokimi,
  umaretekara,
  sorezorenoisu,
  tomeinairo,
];
