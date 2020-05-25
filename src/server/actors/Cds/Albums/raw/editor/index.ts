import { AlbumRaw } from "server/actors/Cds/Albums/models";
import { createAlbumRaw } from "server/actors/Cds/Albums/raw/creator";
import { CdType } from "server/constants/commons";
import { SONGS } from "server/constants/songs";
import { AlbumTitle } from "server/constants/cds";

export const ALBUMS: AlbumRaw[] = [
  createAlbumRaw({
    title: AlbumTitle.Imagaomoideninarumade,
    number: "4",
    release: "2019-04-17",
    previousSingle: "22",
    cdTypes: [CdType.L, CdType.A, CdType.B, CdType.T],
    songs: [
      {
        title: SONGS["ありがちな恋愛"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["逃げ水"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["いつかできるから今日できる"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["シンクロニシティ"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["ジコチューで行こう!"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["帰り道は遠回りしたくなる"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["アンダー"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["My rule"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["新しい世界"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["三角の空き地"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["日常"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["もし君がいなければ"].title,
        inCdType: [CdType.L],
      },
      {
        title: SONGS["キスの手裏剣"].title,
        inCdType: [CdType.L],
      },
      {
        title: SONGS["Against"].title,
        inCdType: [CdType.L],
      },
      {
        title: SONGS["つづく"].title,
        inCdType: [CdType.L],
      },
      {
        title: SONGS["頬杖をついては眠れない"].title,
        inCdType: [CdType.A],
      },
      {
        title: SONGS["ぼっち党"].title,
        inCdType: [CdType.A],
      },
      {
        title: SONGS["僕の衝動"].title,
        inCdType: [CdType.A],
      },
      {
        title: SONGS["スカウトマン"].title,
        inCdType: [CdType.A],
      },
      {
        title: SONGS["さゆりんご募集中"].title,
        inCdType: [CdType.B],
      },
      {
        title: SONGS["ゴルゴンゾーラ"].title,
        inCdType: [CdType.B],
      },
      {
        title: SONGS["トキトキメキメキ"].title,
        inCdType: [CdType.B],
      },
      {
        title: SONGS["未来の答え"].title,
        inCdType: [CdType.B],
      },
      {
        title: SONGS["もうすぐ～ザンビ伝説～"].title,
        inCdType: [CdType.T],
      },
      {
        title: SONGS["キャラバンは眠らない"].title,
        inCdType: [CdType.T],
      },
      {
        title: SONGS["ライブ神"].title,
        inCdType: [CdType.T],
      },
      {
        title: SONGS["自分じゃない感じ"].title,
        inCdType: [CdType.T],
      },
    ],
  }),
  createAlbumRaw({
    title: AlbumTitle.BokudakenokimiUnderBestAlbum,
    number: "U",
    release: "2018-01-10",
    previousSingle: "19",
    cdTypes: [CdType.L1, CdType.L2, CdType.T],
    songs: [
      {
        title: SONGS["左胸の勇気"].title,
        inCdType: [CdType.L1],
      },
      {
        title: SONGS["狼に口笛を"].title,
        inCdType: [CdType.L1],
      },
      {
        title: SONGS["涙がまだ悲しみだった頃"].title,
        inCdType: [CdType.L1],
      },
      {
        title: SONGS["春のメロディー"].title,
        inCdType: [CdType.L1],
      },
      {
        title: SONGS["13日の金曜日"].title,
        inCdType: [CdType.L1],
      },
      {
        title: SONGS["扇風機"].title,
        inCdType: [CdType.L1],
      },
      {
        title: SONGS["初恋の人を今でも"].title,
        inCdType: [CdType.L1],
      },
      {
        title: SONGS["生まれたままで"].title,
        inCdType: [CdType.L1],
      },
      {
        title: SONGS["ここにいる理由"].title,
        inCdType: [CdType.L1],
      },
      {
        title: SONGS["あの日 僕は咄嗟に嘘をついた"].title,
        inCdType: [CdType.L1],
      },
      {
        title: SONGS["君は僕と会わない方がよかったのかな"].title,
        inCdType: [CdType.L1],
      },
      {
        title: SONGS["別れ際、もっと好きになる"].title,
        inCdType: [CdType.L1],
      },
      {
        title: SONGS["嫉妬の権利"].title,
        inCdType: [CdType.L1],
      },
      {
        title: SONGS["不等号"].title,
        inCdType: [CdType.L1],
      },
      {
        title: SONGS["シークレットグラフィティー"].title,
        inCdType: [CdType.L1],
      },
      {
        title: SONGS["ブランコ"].title,
        inCdType: [CdType.L2],
      },
      {
        title: SONGS["風船は生きている"].title,
        inCdType: [CdType.L2],
      },
      {
        title: SONGS["アンダー"].title,
        inCdType: [CdType.L2],
      },
      {
        title: SONGS["My rule"].title,
        inCdType: [CdType.L2],
      },
      {
        title: SONGS["自由の彼方"].title,
        inCdType: [CdType.L2],
      },
      {
        title: SONGS["欲望のリインカーネーション"].title,
        inCdType: [CdType.L2],
      },
      {
        title: SONGS["君が扇いでくれた"].title,
        inCdType: [CdType.L2],
      },
      {
        title: SONGS["自分のこと"].title,
        inCdType: [CdType.L2],
      },
      {
        title: SONGS["自惚れビーチ"].title,
        inCdType: [CdType.L2],
      },
      {
        title: SONGS["その女"].title,
        inCdType: [CdType.L2],
      },
      {
        title: SONGS["誰よりそばにいたい"].title,
        inCdType: [CdType.L2],
      },
    ],
  }),
  createAlbumRaw({
    title: AlbumTitle.Umaretekarahajimetemitayume,
    number: "3",
    release: "2017-05-24",
    previousSingle: "17",
    cdTypes: [CdType.A, CdType.B, CdType.L, CdType.T],
    songs: [
      {
        title: SONGS["裸足でSummer"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["サヨナラの意味"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["インフルエンサー"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["シークレットグラフィティー"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["ブランコ"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["風船は生きている"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["スカイダイビング"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["三番目の風"].title,
        inCdType: [CdType.L, CdType.A, CdType.B, CdType.T],
      },
      {
        title: SONGS["君が扇いでくれた"].title,
        inCdType: [CdType.L],
      },
      {
        title: SONGS["思い出ファースト"].title,
        inCdType: [CdType.L],
      },
      {
        title: SONGS["設定温度"].title,
        inCdType: [CdType.L],
      },
      {
        title: SONGS["孤独な青空"].title,
        inCdType: [CdType.L],
      },
      {
        title: SONGS["僕だけの光"].title,
        inCdType: [CdType.L],
      },
      {
        title: SONGS["人生を考えたくなる"].title,
        inCdType: [CdType.L],
      },
      {
        title: SONGS["意外BREAK"].title,
        inCdType: [CdType.L],
      },
      {
        title: SONGS["Rewindあの日"].title,
        inCdType: [CdType.A],
      },
      {
        title: SONGS["ごめんね、スムージー"].title,
        inCdType: [CdType.A],
      },
      {
        title: SONGS["醜い私"].title,
        inCdType: [CdType.A],
      },
      {
        title: SONGS["オフショアガール"].title,
        inCdType: [CdType.A],
      },
      {
        title: SONGS["君に贈る花がない"].title,
        inCdType: [CdType.A],
      },
      {
        title: SONGS["白米様"].title,
        inCdType: [CdType.A],
      },
      {
        title: SONGS["硬い殻のように抱きしめたい"].title,
        inCdType: [CdType.B],
      },
      {
        title: SONGS["満月が消えた"].title,
        inCdType: [CdType.B],
      },
      {
        title: SONGS["ワタボコリ"].title,
        inCdType: [CdType.B],
      },
      {
        title: SONGS["ないものねだり"].title,
        inCdType: [CdType.B],
      },
      {
        title: SONGS["Another Ghost"].title,
        inCdType: [CdType.B],
      },
      {
        title: SONGS["あの教室"].title,
        inCdType: [CdType.B],
      },
      {
        title: SONGS["流星ディスコティック"].title,
        inCdType: [CdType.T],
      },
      {
        title: SONGS["忘却と美学"].title,
        inCdType: [CdType.T],
      },
      {
        title: SONGS["2度目のキスから"].title,
        inCdType: [CdType.T],
      },
      {
        title: SONGS["命の真実 ミュージカル「林檎売りとカメムシ」"].title,
        inCdType: [CdType.T],
      },
      {
        title: SONGS["行くあてのない僕たち"].title,
        inCdType: [CdType.T],
      },
      {
        title: SONGS["当たり障りのない話"].title,
        inCdType: [CdType.T],
      },
    ],
  }),
  createAlbumRaw({
    title: AlbumTitle.Sorezorenoisu,
    number: "2",
    release: "2016-05-25",
    previousSingle: "14",
    cdTypes: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
    songs: [
      {
        title: SONGS["命は美しい"].title,
        inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      },
      {
        title: SONGS["太陽ノック"].title,
        inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      },
      {
        title: SONGS["今、話したい誰かがいる"].title,
        inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      },
      {
        title: SONGS["きっかけ"].title,
        inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      },
      {
        title: SONGS["太陽に口説かれて"].title,
        inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      },
      {
        title: SONGS["欲望のリインカーネーション"].title,
        inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      },
      {
        title: SONGS["悲しみの忘れ方"].title,
        inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      },
      {
        title: SONGS["空気感"].title,
        inCdType: [CdType.A, CdType.T],
      },
      {
        title: SONGS["光合成希望"].title,
        inCdType: [CdType.A, CdType.T],
      },
      {
        title: SONGS["無表情"].title,
        inCdType: [CdType.A, CdType.T],
      },
      {
        title: SONGS["あらかじめ語られるロマンス"].title,
        inCdType: [CdType.A, CdType.T],
      },
      {
        title: SONGS["隙間"].title,
        inCdType: [CdType.A, CdType.T],
      },
      {
        title: SONGS["急斜面"].title,
        inCdType: [CdType.A, CdType.T],
      },
      {
        title: SONGS["羽根の記憶"].title,
        inCdType: [CdType.A, CdType.T],
      },
      {
        title: SONGS["乃木坂の詩"].title,
        inCdType: [CdType.A, CdType.B, CdType.C, CdType.D, CdType.T],
      },
      {
        title: SONGS["Threefold choice"].title,
        inCdType: [CdType.B],
      },
      {
        title: SONGS["低体温のキス"].title,
        inCdType: [CdType.B],
      },
      {
        title: SONGS["遥かなるブータン"].title,
        inCdType: [CdType.B],
      },
      {
        title: SONGS["ポピパッパパー"].title,
        inCdType: [CdType.B],
      },
      {
        title: SONGS["制服を脱いでサヨナラを…"].title,
        inCdType: [CdType.B],
      },
      {
        title: SONGS["憂鬱と風船ガム"].title,
        inCdType: [CdType.B],
      },
      {
        title: SONGS["立ち直り中"].title,
        inCdType: [CdType.B],
      },
      {
        title: SONGS["失恋したら、顔を洗え!"].title,
        inCdType: [CdType.C],
      },
      {
        title: SONGS["かき氷の片想い"].title,
        inCdType: [CdType.C],
      },
      {
        title: SONGS["大人への近道"].title,
        inCdType: [CdType.C],
      },
      {
        title: SONGS["君は僕と会わない方がよかったのかな"].title,
        inCdType: [CdType.C],
      },
      {
        title: SONGS["別れ際、もっと好きになる"].title,
        inCdType: [CdType.C],
      },
      {
        title: SONGS["嫉妬の権利"].title,
        inCdType: [CdType.C],
      },
      {
        title: SONGS["不等号"].title,
        inCdType: [CdType.C],
      },
      {
        title: SONGS["環状六号線"].title,
        inCdType: [CdType.D],
      },
      {
        title: SONGS["口約束"].title,
        inCdType: [CdType.D],
      },
      {
        title: SONGS["ロマンティックいか焼き"].title,
        inCdType: [CdType.D],
      },
      {
        title: SONGS["ハウス!"].title,
        inCdType: [CdType.D],
      },
      {
        title: SONGS["そんなバカな…"].title,
        inCdType: [CdType.D],
      },
      {
        title: SONGS["シャキイズム"].title,
        inCdType: [CdType.D],
      },
      {
        title: SONGS["ロマンスのスタート"].title,
        inCdType: [CdType.D],
      },
    ],
  }),
  createAlbumRaw({
    title: AlbumTitle.Toumeinairo,
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
  }),
];
