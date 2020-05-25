import { arrayToObject } from "utils/arrays";

export enum SongTitle {
  Sekainorinjinyo = "世界中の隣人よ",
  Hogoshoku = "しあわせの保護色",
  Staywithme = "サヨナラ Stay with me",
  Jaane = "じゃあね。",
  Anastasia = "アナスターシャ",
  Brandnewday = "毎日がBrand new day",
  Isee = "I see…",
  Fantastic = "ファンタスティック三色パン",
  Bokunoomoikomi = "僕の思い込み",
  Domybest = "～Do my best～じゃ意味はない",
  Tokidokiomoidashite = "時々 思い出してください",
  Toshoshitsu = "図書室の君へ",
  Romendensha = "路面電車の街",
  Bokunokoto = "僕のこと、知ってる?",
  Yoakemade = "夜明けまで強がらなくてもいい",
  Singout = "Sing Out!",
  Kassouro = "滑走路",
  Noyounasonzai = "のような存在",
  Amiloving = "Am I Loving?",
  Heikousen = "平行線",
  Yonbanmenohikari = "4番目の光",
  Aimai = "曖昧",
  Kaerimichi = "帰り道は遠回りしたくなる",
  Jikochu = "ジコチューで行こう!",
  Synchronicity = "シンクロニシティ",
  Itsukadekiru = "いつかできるから今日できる",
  Nigemizu = "逃げ水",
  Influencer = "インフルエンサー",
  Sayonaranoimi = "サヨナラの意味",
  Hadasummer = "裸足でSummer",
  Harujion = "ハルジオンが咲く頃",
  Imahana = "今、話したい誰かがいる",
  Taiyouknock = "太陽ノック",
  Inochihautsukushii = "命は美しい",
  Nandomenoaozoraka = "何度目の青空か?",
  Natsunofreeeasy = "夏のFree&Easy",
  Kiduitarakataomoi = "気づいたら片想い",
  Valletta = "バレッタ",
  Girlsrule = "ガールズルール",
  Kiminonahakibou = "君の名は希望",
  Seifukunomannequin = "制服のマネキン",
  Hashirebicycle = "走れ!Bicycle",
  Oideshampo = "おいでシャンプー",
  Gurugurucurtain = "ぐるぐるカーテン",
  Nichijou = "日常",
  Sankakunoakichi = "三角の空き地",
  Atarashiisekai = "新しい世界",
  Myrule = "My rule",
  Under = "アンダー",
  Fusuenhaikiteiru = "風船は生きている",
  Bulanko = "ブランコ",
  Secretgravity = "シークレットグラフィティー",
  Futoogo = "不等号",
  Shittonokenri = "嫉妬の権利",
  Wakaregiwa = "別れ際、もっと好きになる",
  Kimihabokuto = "君は僕と会わない方がよかったのかな",
  Anohibokuha = "あの日 僕は咄嗟に嘘をついた",
  Kokoniiruriyuu = "ここにいる理由",
  Umaretamamade = "生まれたままで",
  Hatsukoinohitowo = "初恋の人を今でも",
  Senpuuki = "扇風機",
  Jyusannichinokinyoubi = "13日の金曜日",
  Harunomelody = "春のメロディー",
  Namidagamadakanashimi = "涙がまだ悲しみだった頃",
  Ookaminikuchibuewo = "狼に口笛を",
  Hidarimunenoyuuki = "左胸の勇気",
  Caravan = "キャラバンは眠らない",
  Tsuduku = "つづく",
  Kokuhakunojunban = "告白の順番",
  Chopinnousotsuki = "ショパンの嘘つき",
  Shiritaikoto = "知りたいこと",
  Soratobira = "空扉",
  Jibunjanaikanji = "自分じゃない感じ",
  Kokoronomonolog = "心のモノローグ",
  Chikyuugamaruinara = "地球が丸いなら",
  Annarisukidatta = "あんなに好きだったのに...",
  Against = "Against",
  Kumoninarebaii = "雲になればいい",
  Scoutman = "スカウトマン",
  Tokitokimekimeki = "トキトキメキメキ",
  Kotodamahou = "言霊砲",
  Fumenshou = "不眠症",
  Maaiika = "まあいいか?",
  Shirenosoujinin = "失恋お掃除人",
  Bokunoshoudou = "僕の衝動",
  Atarashiikafun = "新しい花粉 〜ミュージカル「見知らぬ世界」より〜",
  Onnahahitorija = "女は一人じゃ眠れない",
  Hitonatsunonagasa = "ひと夏の長さより…",
  Naitatteiijanaika = "泣いたっていいじゃないか?",
  Liveshin = "ライブ神",
  Mirainokotae = "未来の答え",
  Jinseiwokangaetakunaru = "人生を考えたくなる",
  Igaibreak = "意外BREAK",
  Anotherghost = "Another Ghost",
  Sanbanmenokaze = "三番目の風",
  Atarisawarinonaihanashi = "当たり障りのない話",
  Kodokunaaozora = "孤独な青空",
  Anokyoushitsu = "あの教室",
  Nidomenokisskara = "2度目のキスから",
  Kiminiokuruhanaganai = "君に贈る花がない",
  Naimononedari = "ないものねだり",
  Bokudakenohikari = "僕だけの光",
  Offshoregirl = "オフショアガール",
  Inochinoshinjitsu = "命の真実 ミュージカル「林檎売りとカメムシ」",
  Hakumaisama = "白米様",
  Ikuatenonaibokutachi = "行くあてのない僕たち",
  Harukanarubhutan = "遥かなるブータン",
  Tsuyogarutsubomi = "強がる蕾",
  Kyuushamen = "急斜面",
  Tsuribori = "釣り堀",
  Yuuutsutofuusengamu = "憂鬱と風船ガム",
  Popipappappa = "ポピパッパパー",
  Otonahenochikamichi = "大人への近道",
  Kanashiminowasurekata = "悲しみの忘れ方",
  Sukima = "隙間",
  Mousukoshinoyume = "もう少しの夢",
  Sakanatachinolovesong = "魚たちのLOVE SONG",
  Muhyoujyou = "無表情",
  Hanenokioku = "羽根の記憶",
  Seifukuwonuidesayonarawo = "制服を脱いでサヨナラを…",
  Arakajimekatarareruromance = "あらかじめ語られるロマンス",
  Tachinaorichuu = "立ち直り中",
  Gomennezutto = "ごめんね ずっと…",
  Border = "ボーダー",
  Toomawarinoaijou = "遠回りの愛情",
  Korogattakanewonarase = "転がった鐘を鳴らせ!",
  Watashiokiru = "私、起きる。",
  Tendergays = "Tender days",
  Nanimodekizunisobaniiru = "何もできずにそばにいる",
  Sonosakinodeguchi = "その先の出口!",
  Mukuchinalion = "無口なライオン",
  Bokugaikanakyadaregaikunda = "僕が行かなきゃ誰が行くんだ?",
  Romancenostart = "ロマンスのスタート",
  Toikimethod = "吐息のメソッド",
  Kodokukyoudai = "孤独兄弟",
  Dankeschan = "ダンケシェーン",
  Tsukinoookisa = "月の大きさ",
  Watanotamenidarekanotameni = "私のために 誰かのために",
  Sonnabakana = "そんなバカな…",
  Yasashisatoha = "やさしさとは",
  Sekaideichibankodokuralover = "世界で一番 孤独なLover",
  Koumoriyo = "コウモリよ",
  Hokanohoshikara = "他の星から",
  Ningentoiugakki = "人間という楽器",
  Shakism = "シャキイズム",
  Romanticikayaki = "ロマンティックいか焼き",
  Dekopin = "でこぴん",
  Psychokinesesnokanousei = "サイコキネシスの可能性",
  Yubibouenkyou = "指望遠鏡",
  Yasashisanaramaniatteiru = "やさしさなら間に合ってる",
  Kokojanaidokoka = "ここじゃないどこか",
  Shibuyablues = "渋谷ブルース",
  Sekkachinakatatsumuri = "せっかちなかたつむり",
  Hitohanazehashirunoka = "人はなぜ走るのか?",
  Otogadenaiguitar = "音が出ないギター",
  Kairyuunoshimayo = "海流の島よ",
  Kokoronokusuri = "心の薬",
  Guuzenwoiiwakenishite = "偶然を言い訳にして",
  Mizutamamoyou = "水玉模様",
  House = "ハウス!",
  Nogizakanouta = "乃木坂の詩",
  Aitakattakamoshirenai = "会いたかったかもしれない",
  Ushinaitakunaikara = "失いたくないから",
  Shiroikumoninotte = "白い雲にのって",
  Darekanomikata = "誰かは味方",
  Kakumeinouma = "革命の馬",
  Bokugairubasho = "僕がいる場所",
  Anatanotamenihikitai = "あなたのために弾きたい",
  Keishasuru = "傾斜する",
  Nazonorakugaki = "なぞの落書き",
  Jiyuunokanata = "自由の彼方",
  Hitoriyogari = "ひとりよがり",
  Kikkake = "きっかけ",
  Taiyounikudokarete = "太陽に口説かれて",
  Yokuboureincarnation = "欲望のリインカーネーション",
  Kuukikann = "空気感",
  Kougouseikibou = "光合成希望",
  Threefoldchoice = "Threefold choice",
  Teitaionnokiss = "低体温のキス",
  Shitsurenshitarakaowoarae = "失恋したら、顔を洗え!",
  Kakigoorinokataomoi = "かき氷の片想い",
  Kanjyourokugousen = "環状六号線",
  Kuchiyakusoku = "口約束",
  Skydiving = "スカイダイビング",
  Kimigaaoidekureta = "君が扇いでくれた",
  Omoidefirst = "思い出ファースト",
  Setteiondo = "設定温度",
  Rewindanohi = "Rewindあの日",
  Gomennesmoothie = "ごめんね、スムージー",
  Minikuiwatashi = "醜い私",
  Karaikaranoyounidakishimetai = "硬い殻のように抱きしめたい",
  Mangetsugakieta = "満月が消えた",
  Watabokori = "ワタボコリ",
  Ryuuseidiscotic = "流星ディスコティック",
  Boukyakutobigaku = "忘却と美学",
  Jibunnokoto = "自分のこと",
  Unuborebeach = "自惚れビーチ",
  Sonohito = "その女",
  Dareyorimosobaniitai = "誰よりそばにいたい",
  Arigachinarenai = "ありがちな恋愛",
  Moshikimigainakereba = "もし君がいなければ",
  Kissnoshuriken = "キスの手裏剣",
  Hoozuewotsuitehanemurenai = "頬杖をついては眠れない",
  Bocchitou = "ぼっち党",
  Sayuringoboshuuchuu = "さゆりんご募集中",
  Gorugonzora = "ゴルゴンゾーラ",
  Mousuguzambidensetsu = "もうすぐ～ザンビ伝説～",
  OVERTURE = "OVERTURE",
}

export const SongsTitleKeyArray: {
  title: SongTitle;
  key: string;
}[] = [
  {
    title: SongTitle.Sekainorinjinyo,
    key: "sekainorinjinyo",
  },
  {
    title: SongTitle.Hogoshoku,
    key: "hogoshoku",
  },
  {
    title: SongTitle.Staywithme,
    key: "staywithme",
  },
  {
    title: SongTitle.Jaane,
    key: "jaane",
  },
  {
    title: SongTitle.Anastasia,
    key: "anastasia",
  },
  {
    title: SongTitle.Brandnewday,
    key: "brandnewday",
  },
  {
    title: SongTitle.Isee,
    key: "isee",
  },
  {
    title: SongTitle.Fantastic,
    key: "fantastic",
  },
  {
    title: SongTitle.Bokunoomoikomi,
    key: "bokunoomoikomi",
  },
  {
    title: SongTitle.Domybest,
    key: "domybest",
  },
  {
    title: SongTitle.Tokidokiomoidashite,
    key: "tokidokiomoidashite",
  },
  {
    title: SongTitle.Toshoshitsu,
    key: "toshoshitsu",
  },
  {
    title: SongTitle.Romendensha,
    key: "romendensha",
  },
  {
    title: SongTitle.Bokunokoto,
    key: "bokunokoto",
  },
  {
    title: SongTitle.Yoakemade,
    key: "yoakemade",
  },
  {
    title: SongTitle.Singout,
    key: "singout",
  },
  {
    title: SongTitle.Kassouro,
    key: "kassouro",
  },
  {
    title: SongTitle.Noyounasonzai,
    key: "noyounasonzai",
  },
  {
    title: SongTitle.Amiloving,
    key: "amiloving",
  },
  {
    title: SongTitle.Heikousen,
    key: "heikousen",
  },
  {
    title: SongTitle.Yonbanmenohikari,
    key: "yonbanmenohikari",
  },
  {
    title: SongTitle.Aimai,
    key: "aimai",
  },
  {
    title: SongTitle.Kaerimichi,
    key: "kaerimichi",
  },
  {
    title: SongTitle.Jikochu,
    key: "jikochu",
  },
  {
    title: SongTitle.Synchronicity,
    key: "synchronicity",
  },
  {
    title: SongTitle.Itsukadekiru,
    key: "itsukadekiru",
  },
  {
    title: SongTitle.Nigemizu,
    key: "nigemizu",
  },
  {
    title: SongTitle.Influencer,
    key: "influencer",
  },
  {
    title: SongTitle.Sayonaranoimi,
    key: "sayonaranoimi",
  },
  {
    title: SongTitle.Hadasummer,
    key: "hadasummer",
  },
  {
    title: SongTitle.Harujion,
    key: "harujion",
  },
  {
    title: SongTitle.Imahana,
    key: "imahana",
  },
  {
    title: SongTitle.Taiyouknock,
    key: "taiyouknock",
  },
  {
    title: SongTitle.Inochihautsukushii,
    key: "inochihautsukushii",
  },
  {
    title: SongTitle.Nandomenoaozoraka,
    key: "nandomenoaozoraka",
  },
  {
    title: SongTitle.Natsunofreeeasy,
    key: "natsunofreeeasy",
  },
  {
    title: SongTitle.Kiduitarakataomoi,
    key: "kiduitarakataomoi",
  },
  {
    title: SongTitle.Valletta,
    key: "valletta",
  },
  {
    title: SongTitle.Girlsrule,
    key: "girlsrule",
  },
  {
    title: SongTitle.Kiminonahakibou,
    key: "kiminonahakibou",
  },
  {
    title: SongTitle.Seifukunomannequin,
    key: "seifukunomannequin",
  },
  {
    title: SongTitle.Hashirebicycle,
    key: "hashirebicycle",
  },
  {
    title: SongTitle.Oideshampo,
    key: "oideshampo",
  },
  {
    title: SongTitle.Gurugurucurtain,
    key: "gurugurucurtain",
  },
  {
    title: SongTitle.Nichijou,
    key: "nichijou",
  },
  {
    title: SongTitle.Sankakunoakichi,
    key: "sankakunoakichi",
  },
  {
    title: SongTitle.Atarashiisekai,
    key: "atarashiisekai",
  },
  {
    title: SongTitle.Myrule,
    key: "myrule",
  },
  {
    title: SongTitle.Under,
    key: "under",
  },
  {
    title: SongTitle.Fusuenhaikiteiru,
    key: "fusuenhaikiteiru",
  },
  {
    title: SongTitle.Bulanko,
    key: "bulanko",
  },
  {
    title: SongTitle.Secretgravity,
    key: "secretgravity",
  },
  {
    title: SongTitle.Futoogo,
    key: "futoogo",
  },
  {
    title: SongTitle.Shittonokenri,
    key: "shittonokenri",
  },
  {
    title: SongTitle.Wakaregiwa,
    key: "wakaregiwa",
  },
  {
    title: SongTitle.Kimihabokuto,
    key: "kimihabokuto",
  },
  {
    title: SongTitle.Anohibokuha,
    key: "anohibokuha",
  },
  {
    title: SongTitle.Kokoniiruriyuu,
    key: "kokoniiruriyuu",
  },
  {
    title: SongTitle.Umaretamamade,
    key: "umaretamamade",
  },
  {
    title: SongTitle.Hatsukoinohitowo,
    key: "hatsukoinohitowo",
  },
  {
    title: SongTitle.Senpuuki,
    key: "senpuuki",
  },
  {
    title: SongTitle.Jyusannichinokinyoubi,
    key: "13nichinokinyoubi",
  },
  {
    title: SongTitle.Harunomelody,
    key: "harunomelody",
  },
  {
    title: SongTitle.Namidagamadakanashimi,
    key: "namidagamadakanashimi",
  },
  {
    title: SongTitle.Ookaminikuchibuewo,
    key: "ookaminikuchibuewo",
  },
  {
    title: SongTitle.Hidarimunenoyuuki,
    key: "hidarimunenoyuuki",
  },
  {
    title: SongTitle.Caravan,
    key: "caravan",
  },
  {
    title: SongTitle.Tsuduku,
    key: "tsuduku",
  },
  {
    title: SongTitle.Kokuhakunojunban,
    key: "kokuhakunojunban",
  },
  {
    title: SongTitle.Chopinnousotsuki,
    key: "chopinnousotsuki",
  },
  {
    title: SongTitle.Shiritaikoto,
    key: "shiritaikoto",
  },
  {
    title: SongTitle.Soratobira,
    key: "soratobira",
  },
  {
    title: SongTitle.Jibunjanaikanji,
    key: "jibunjanaikanji",
  },
  {
    title: SongTitle.Kokoronomonolog,
    key: "kokoronomonolog",
  },
  {
    title: SongTitle.Chikyuugamaruinara,
    key: "chikyuugamaruinara",
  },
  {
    title: SongTitle.Annarisukidatta,
    key: "annarisukidatta",
  },
  {
    title: SongTitle.Against,
    key: "against",
  },
  {
    title: SongTitle.Kumoninarebaii,
    key: "kumoninarebaii",
  },
  {
    title: SongTitle.Scoutman,
    key: "scoutman",
  },
  {
    title: SongTitle.Tokitokimekimeki,
    key: "tokitokimekimeki",
  },
  {
    title: SongTitle.Kotodamahou,
    key: "kotodamahou",
  },
  {
    title: SongTitle.Fumenshou,
    key: "fumenshou",
  },
  {
    title: SongTitle.Maaiika,
    key: "maaiika",
  },
  {
    title: SongTitle.Shirenosoujinin,
    key: "shirenosoujinin",
  },
  {
    title: SongTitle.Bokunoshoudou,
    key: "bokunoshoudou",
  },
  {
    title: SongTitle.Atarashiikafun,
    key: "atarashiikafun",
  },
  {
    title: SongTitle.Onnahahitorija,
    key: "onnahahitorija",
  },
  {
    title: SongTitle.Hitonatsunonagasa,
    key: "hitonatsunonagasa",
  },
  {
    title: SongTitle.Naitatteiijanaika,
    key: "naitatteiijanaika",
  },
  {
    title: SongTitle.Liveshin,
    key: "liveshin",
  },
  {
    title: SongTitle.Mirainokotae,
    key: "mirainokotae",
  },
  {
    title: SongTitle.Jinseiwokangaetakunaru,
    key: "jinseiwokangaetakunaru",
  },
  {
    title: SongTitle.Igaibreak,
    key: "igaibreak",
  },
  {
    title: SongTitle.Anotherghost,
    key: "anotherghost",
  },
  {
    title: SongTitle.Sanbanmenokaze,
    key: "sanbanmenokaze",
  },
  {
    title: SongTitle.Atarisawarinonaihanashi,
    key: "atarisawarinonaihanashi",
  },
  {
    title: SongTitle.Kodokunaaozora,
    key: "kodokunaaozora",
  },
  {
    title: SongTitle.Anokyoushitsu,
    key: "anokyoushitsu",
  },
  {
    title: SongTitle.Nidomenokisskara,
    key: "nidomenokisskara",
  },
  {
    title: SongTitle.Kiminiokuruhanaganai,
    key: "kiminiokuruhanaganai",
  },
  {
    title: SongTitle.Naimononedari,
    key: "naimononedari",
  },
  {
    title: SongTitle.Bokudakenohikari,
    key: "bokudakenohikari",
  },
  {
    title: SongTitle.Offshoregirl,
    key: "offshoregirl",
  },
  {
    title: SongTitle.Inochinoshinjitsu,
    key: "inochinoshinjitsu",
  },
  {
    title: SongTitle.Hakumaisama,
    key: "hakumaisama",
  },
  {
    title: SongTitle.Ikuatenonaibokutachi,
    key: "ikuatenonaibokutachi",
  },
  {
    title: SongTitle.Harukanarubhutan,
    key: "harukanarubhutan",
  },
  {
    title: SongTitle.Tsuyogarutsubomi,
    key: "tsuyogarutsubomi",
  },
  {
    title: SongTitle.Kyuushamen,
    key: "kyuushamen",
  },
  {
    title: SongTitle.Tsuribori,
    key: "tsuribori",
  },
  {
    title: SongTitle.Yuuutsutofuusengamu,
    key: "yuuutsutofuusengamu",
  },
  {
    title: SongTitle.Popipappappa,
    key: "popipappappa",
  },
  {
    title: SongTitle.Otonahenochikamichi,
    key: "otonahenochikamichi",
  },
  {
    title: SongTitle.Kanashiminowasurekata,
    key: "kanashiminowasurekata",
  },
  {
    title: SongTitle.Sukima,
    key: "sukima",
  },
  {
    title: SongTitle.Mousukoshinoyume,
    key: "mousukoshinoyume",
  },
  {
    title: SongTitle.Sakanatachinolovesong,
    key: "sakanatachinolovesong",
  },
  {
    title: SongTitle.Muhyoujyou,
    key: "muhyoujyou",
  },
  {
    title: SongTitle.Hanenokioku,
    key: "hanenokioku",
  },
  {
    title: SongTitle.Seifukuwonuidesayonarawo,
    key: "seifukuwonuidesayonarawo",
  },
  {
    title: SongTitle.Arakajimekatarareruromance,
    key: "arakajimekatarareruromance",
  },
  {
    title: SongTitle.Tachinaorichuu,
    key: "tachinaorichuu",
  },
  {
    title: SongTitle.Gomennezutto,
    key: "gomennezutto",
  },
  {
    title: SongTitle.Border,
    key: "border",
  },
  {
    title: SongTitle.Toomawarinoaijou,
    key: "toomawarinoaijou",
  },
  {
    title: SongTitle.Korogattakanewonarase,
    key: "korogattakanewonarase",
  },
  {
    title: SongTitle.Watashiokiru,
    key: "watashiokiru",
  },
  {
    title: SongTitle.Tendergays,
    key: "tendergays",
  },
  {
    title: SongTitle.Nanimodekizunisobaniiru,
    key: "nanimodekizunisobaniiru",
  },
  {
    title: SongTitle.Sonosakinodeguchi,
    key: "sonosakinodeguchi",
  },
  {
    title: SongTitle.Mukuchinalion,
    key: "mukuchinalion",
  },
  {
    title: SongTitle.Bokugaikanakyadaregaikunda,
    key: "bokugaikanakyadaregaikunda",
  },
  {
    title: SongTitle.Romancenostart,
    key: "romancenostart",
  },
  {
    title: SongTitle.Toikimethod,
    key: "toikimethod",
  },
  {
    title: SongTitle.Kodokukyoudai,
    key: "kodokukyoudai",
  },
  {
    title: SongTitle.Dankeschan,
    key: "dankeschan",
  },
  {
    title: SongTitle.Tsukinoookisa,
    key: "tsukinoookisa",
  },
  {
    title: SongTitle.Watanotamenidarekanotameni,
    key: "watanotamenidarekanotameni",
  },
  {
    title: SongTitle.Sonnabakana,
    key: "sonnabakana",
  },
  {
    title: SongTitle.Yasashisatoha,
    key: "yasashisatoha",
  },
  {
    title: SongTitle.Sekaideichibankodokuralover,
    key: "sekaideichibankodokuralover",
  },
  {
    title: SongTitle.Koumoriyo,
    key: "koumoriyo",
  },
  {
    title: SongTitle.Hokanohoshikara,
    key: "hokanohoshikara",
  },
  {
    title: SongTitle.Ningentoiugakki,
    key: "ningentoiugakki",
  },
  {
    title: SongTitle.Shakism,
    key: "shakism",
  },
  {
    title: SongTitle.Romanticikayaki,
    key: "romanticikayaki",
  },
  {
    title: SongTitle.Dekopin,
    key: "dekopin",
  },
  {
    title: SongTitle.Psychokinesesnokanousei,
    key: "psychokinesesnokanousei",
  },
  {
    title: SongTitle.Yubibouenkyou,
    key: "yubibouenkyou",
  },
  {
    title: SongTitle.Yasashisanaramaniatteiru,
    key: "yasashisanaramaniatteiru",
  },
  {
    title: SongTitle.Kokojanaidokoka,
    key: "kokojanaidokoka",
  },
  {
    title: SongTitle.Shibuyablues,
    key: "shibuyablues",
  },
  {
    title: SongTitle.Sekkachinakatatsumuri,
    key: "sekkachinakatatsumuri",
  },
  {
    title: SongTitle.Hitohanazehashirunoka,
    key: "hitohanazehashirunoka",
  },
  {
    title: SongTitle.Otogadenaiguitar,
    key: "otogadenaiguitar",
  },
  {
    title: SongTitle.Kairyuunoshimayo,
    key: "kairyuunoshimayo",
  },
  {
    title: SongTitle.Kokoronokusuri,
    key: "kokoronokusuri",
  },
  {
    title: SongTitle.Guuzenwoiiwakenishite,
    key: "guuzenwoiiwakenishite",
  },
  {
    title: SongTitle.Mizutamamoyou,
    key: "mizutamamoyou",
  },
  {
    title: SongTitle.House,
    key: "house",
  },
  {
    title: SongTitle.Nogizakanouta,
    key: "nogizakanouta",
  },
  {
    title: SongTitle.Aitakattakamoshirenai,
    key: "aitakattakamoshirenai",
  },
  {
    title: SongTitle.Ushinaitakunaikara,
    key: "ushinaitakunaikara",
  },
  {
    title: SongTitle.Shiroikumoninotte,
    key: "shiroikumoninotte",
  },
  {
    title: SongTitle.Darekanomikata,
    key: "darekanomikata",
  },
  {
    title: SongTitle.Kakumeinouma,
    key: "kakumeinouma",
  },
  {
    title: SongTitle.Bokugairubasho,
    key: "bokugairubasho",
  },
  {
    title: SongTitle.Anatanotamenihikitai,
    key: "anatanotamenihikitai",
  },
  {
    title: SongTitle.Keishasuru,
    key: "keishasuru",
  },
  {
    title: SongTitle.Nazonorakugaki,
    key: "nazonorakugaki",
  },
  {
    title: SongTitle.Jiyuunokanata,
    key: "jiyuunokanata",
  },
  {
    title: SongTitle.Hitoriyogari,
    key: "hitoriyogari",
  },
  {
    title: SongTitle.Kikkake,
    key: "kikkake",
  },
  {
    title: SongTitle.Taiyounikudokarete,
    key: "taiyounikudokarete",
  },
  {
    title: SongTitle.Yokuboureincarnation,
    key: "yokuboureincarnation",
  },
  {
    title: SongTitle.Kuukikann,
    key: "kuukikann",
  },
  {
    title: SongTitle.Kougouseikibou,
    key: "kougouseikibou",
  },
  {
    title: SongTitle.Threefoldchoice,
    key: "threefoldchoice",
  },
  {
    title: SongTitle.Teitaionnokiss,
    key: "teitaionnokiss",
  },
  {
    title: SongTitle.Shitsurenshitarakaowoarae,
    key: "shitsurenshitarakaowoarae",
  },
  {
    title: SongTitle.Kakigoorinokataomoi,
    key: "kakigoorinokataomoi",
  },
  {
    title: SongTitle.Kanjyourokugousen,
    key: "kanjyourokugousen",
  },
  {
    title: SongTitle.Kuchiyakusoku,
    key: "kuchiyakusoku",
  },
  {
    title: SongTitle.Skydiving,
    key: "skydiving",
  },
  {
    title: SongTitle.Kimigaaoidekureta,
    key: "kimigaaoidekureta",
  },
  {
    title: SongTitle.Omoidefirst,
    key: "omoidefirst",
  },
  {
    title: SongTitle.Setteiondo,
    key: "setteiondo",
  },
  {
    title: SongTitle.Rewindanohi,
    key: "Rewindanohi",
  },
  {
    title: SongTitle.Gomennesmoothie,
    key: "gomennesmoothie",
  },
  {
    title: SongTitle.Minikuiwatashi,
    key: "minikuiwatashi",
  },
  {
    title: SongTitle.Karaikaranoyounidakishimetai,
    key: "karaikaranoyounidakishimetai",
  },
  {
    title: SongTitle.Mangetsugakieta,
    key: "mangetsugakieta",
  },
  {
    title: SongTitle.Watabokori,
    key: "watabokori",
  },
  {
    title: SongTitle.Ryuuseidiscotic,
    key: "ryuuseidiscotic",
  },
  {
    title: SongTitle.Boukyakutobigaku,
    key: "boukyakutobigaku",
  },
  {
    title: SongTitle.Jibunnokoto,
    key: "jibunnokoto",
  },
  {
    title: SongTitle.Unuborebeach,
    key: "unuborebeach",
  },
  {
    title: SongTitle.Sonohito,
    key: "sonohito",
  },
  {
    title: SongTitle.Dareyorimosobaniitai,
    key: "dareyorimosobaniitai",
  },
  {
    title: SongTitle.Arigachinarenai,
    key: "arigachinarenai",
  },
  {
    title: SongTitle.Moshikimigainakereba,
    key: "moshikimigainakereba",
  },
  {
    title: SongTitle.Kissnoshuriken,
    key: "kissnoshuriken",
  },
  {
    title: SongTitle.Hoozuewotsuitehanemurenai,
    key: "hoozuewotsuitehanemurenai",
  },
  {
    title: SongTitle.Bocchitou,
    key: "bocchitou",
  },
  {
    title: SongTitle.Sayuringoboshuuchuu,
    key: "sayuringoboshuuchuu",
  },
  {
    title: SongTitle.Gorugonzora,
    key: "gorugonzora",
  },
  {
    title: SongTitle.Mousuguzambidensetsu,
    key: "mousuguzambidensetsu",
  },
  {
    title: SongTitle.OVERTURE,
    key: "OVERTURE",
  },
];

export const SONGS = arrayToObject(SongsTitleKeyArray, "title");

export const OVERTURE = "OVERTURE";
