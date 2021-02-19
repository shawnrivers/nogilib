import { arrayToObject } from 'utils/array';
import { TitleKeyArray } from 'server/types/commons';

export enum SongTitle {
  YuujouPierce = '友情ピアス',
  Ashigaaruriyuu = '明日がある理由',
  WildernessWorld = 'Wilderness world',
  KuchihodonimonaiKiss = '口ほどにもないKISS',
  OutOfTheBlue = 'Out of the blue',
  Tsumetaimizunonaka = '冷たい水の中',
  Bokuhabokuwosukininaru = '僕は僕を好きになる',
  Route246 = 'Route 246',
  Sekainorinjinyo = '世界中の隣人よ',
  Shiawasenohogoshoku = 'しあわせの保護色',
  SayonaraStayWithMe = 'サヨナラ Stay with me',
  Jaane = 'じゃあね。',
  Anastasia = 'アナスターシャ',
  MainichigaBrandNewDay = '毎日がBrand new day',
  ISee = 'I see…',
  FantasticSanshokupan = 'ファンタスティック三色パン',
  Bokunoomoikomi = '僕の思い込み',
  DoMyBestJaimiganai = '～Do my best～じゃ意味はない',
  Tokidokiomoidashitekudasai = '時々 思い出してください',
  Toshoshitsunokimihe = '図書室の君へ',
  Romendenshanomachi = '路面電車の街',
  Bokunokotoshitteru = '僕のこと、知ってる?',
  Yoakemadetsuyogaranakutemoii = '夜明けまで強がらなくてもいい',
  SingOut = 'Sing Out!',
  Kassouro = '滑走路',
  Noyounasonzai = 'のような存在',
  AmILoving = 'Am I Loving?',
  Heikousen = '平行線',
  Yonbanmenohikari = '4番目の光',
  Aimai = '曖昧',
  Kaerimichihatoomawarishitakunaru = '帰り道は遠回りしたくなる',
  Jikochudeikou = 'ジコチューで行こう!',
  Synchronicity = 'シンクロニシティ',
  Itsukadekirukarakyoudekiru = 'いつかできるから今日できる',
  Nigemizu = '逃げ水',
  Influencer = 'インフルエンサー',
  Sayonaranoimi = 'サヨナラの意味',
  HadashideSummer = '裸足でSummer',
  Harujiongasakugoro = 'ハルジオンが咲く頃',
  ImaHanashitaidarekagairu = '今、話したい誰かがいる',
  TaiyouKnock = '太陽ノック',
  Inochihautsukushii = '命は美しい',
  Nandomenoaozoraka = '何度目の青空か?',
  NatsunoFreeAndEasy = '夏のFree&Easy',
  Kiduitarakataomoi = '気づいたら片想い',
  Valletta = 'バレッタ',
  GirlsRule = 'ガールズルール',
  Kiminonahakibou = '君の名は希望',
  SeifukunoMannequin = '制服のマネキン',
  HashireBicycle = '走れ!Bicycle',
  Oideshampo = 'おいでシャンプー',
  GuruguruCurtain = 'ぐるぐるカーテン',
  Nichijou = '日常',
  Sankakunoakichi = '三角の空き地',
  Atarashiisekai = '新しい世界',
  MyRule = 'My rule',
  Under = 'アンダー',
  Fusuenhaikiteiru = '風船は生きている',
  Bulanko = 'ブランコ',
  SecretGravity = 'シークレットグラフィティー',
  Futoogo = '不等号',
  Shittonokenri = '嫉妬の権利',
  WakaregiwaMottosukininaru = '別れ際、もっと好きになる',
  Kimihabokutotoawanaihougayokattanokana = '君は僕と会わない方がよかったのかな',
  Anohibokuhausowotsuita = 'あの日 僕は咄嗟に嘘をついた',
  Kokoniiruriyuu = 'ここにいる理由',
  Umaretamamade = '生まれたままで',
  Hatsukoinohitowoimademo = '初恋の人を今でも',
  Senpuuki = '扇風機',
  Jyuusannichinokinyoubi = '13日の金曜日',
  HarunoMelody = '春のメロディー',
  Namidagamadakanashimidattakoro = '涙がまだ悲しみだった頃',
  Ookaminikuchibuewo = '狼に口笛を',
  Hidarimunenoyuuki = '左胸の勇気',
  CaravanHanemuranai = 'キャラバンは眠らない',
  Tsuduku = 'つづく',
  Kokuhakunojunban = '告白の順番',
  ChopinNousotsuki = 'ショパンの嘘つき',
  Shiritaikoto = '知りたいこと',
  Soratobira = '空扉',
  Jibunjanaikanji = '自分じゃない感じ',
  KokoronoMonolog = '心のモノローグ',
  Chikyuugamaruinara = '地球が丸いなら',
  Annanisukidattanoni = 'あんなに好きだったのに...',
  Against = 'Against',
  Kumoninarebaii = '雲になればいい',
  ScoutMan = 'スカウトマン',
  Tokitokimekimeki = 'トキトキメキメキ',
  Kotodamahou = '言霊砲',
  Fumenshou = '不眠症',
  Maaiika = 'まあいいか?',
  Shitsurenosoujinin = '失恋お掃除人',
  Bokunoshoudou = '僕の衝動',
  Atarashiikafun = '新しい花粉 〜ミュージカル「見知らぬ世界」より〜',
  Onnahahitorijanemurenai = '女は一人じゃ眠れない',
  Hitonatsunonagasayori = 'ひと夏の長さより…',
  Naitatteiijanaika = '泣いたっていいじゃないか?',
  LiveShin = 'ライブ神',
  Mirainokotae = '未来の答え',
  Jinseiwokangaetakunaru = '人生を考えたくなる',
  IgaiBreak = '意外BREAK',
  AnotherGhost = 'Another Ghost',
  Sanbanmenokaze = '三番目の風',
  Atarisawarinonaihanashi = '当たり障りのない話',
  Kodokunaaozora = '孤独な青空',
  Anokyoushitsu = 'あの教室',
  Nidomenokisskara = '2度目のキスから',
  Kiminiokuruhanaganai = '君に贈る花がない',
  Naimononedari = 'ないものねだり',
  Bokudakenohikari = '僕だけの光',
  OffshoreGirl = 'オフショアガール',
  Inochinoshinjitsu = '命の真実 ミュージカル「林檎売りとカメムシ」',
  Hakumaisama = '白米様',
  Ikuatenonaibokutachi = '行くあてのない僕たち',
  HarukanaruBhutan = '遥かなるブータン',
  Tsuyogarutsubomi = '強がる蕾',
  Kyuushamen = '急斜面',
  Tsuribori = '釣り堀',
  Yuuutsutofuusengamu = '憂鬱と風船ガム',
  Popipappappa = 'ポピパッパパー',
  Otonahenochikamichi = '大人への近道',
  Kanashiminowasurekata = '悲しみの忘れ方',
  Sukima = '隙間',
  Mousukoshinoyume = 'もう少しの夢',
  SakanatachinoLoveSong = '魚たちのLOVE SONG',
  Muhyoujyou = '無表情',
  Hanenokioku = '羽根の記憶',
  Seifukuwonuidesayonarawo = '制服を脱いでサヨナラを…',
  ArakajimekatarareruRomance = 'あらかじめ語られるロマンス',
  Tachinaorichuu = '立ち直り中',
  GomenneZutto = 'ごめんね ずっと…',
  Border = 'ボーダー',
  Toomawarinoaijou = '遠回りの愛情',
  Korogattakanewonarase = '転がった鐘を鳴らせ!',
  Watashiokiru = '私、起きる。',
  TenderDays = 'Tender days',
  Nanimodekizunisobaniiru = '何もできずにそばにいる',
  Sonosakinodeguchi = 'その先の出口!',
  MukuchinaLion = '無口なライオン',
  Bokugaikanakyadaregaikunda = '僕が行かなきゃ誰が行くんだ?',
  RomanceNoStart = 'ロマンスのスタート',
  ToikiMethod = '吐息のメソッド',
  Kodokukyoudai = '孤独兄弟',
  Dankeschan = 'ダンケシェーン',
  Tsukinoookisa = '月の大きさ',
  WatashinotameniDarekanotameni = '私のために 誰かのために',
  Sonnabakana = 'そんなバカな…',
  Yasashisatoha = 'やさしさとは',
  SekaideichibanKodokuraLover = '世界で一番 孤独なLover',
  Koumoriyo = 'コウモリよ',
  Hokanohoshikara = '他の星から',
  Ningentoiugakki = '人間という楽器',
  Shakism = 'シャキイズム',
  RomanticIkayaki = 'ロマンティックいか焼き',
  Dekopin = 'でこぴん',
  PsychokinesesNokanousei = 'サイコキネシスの可能性',
  Yubibouenkyou = '指望遠鏡',
  Yasashisanaramaniatteiru = 'やさしさなら間に合ってる',
  Kokojanaidokoka = 'ここじゃないどこか',
  ShibuyaBlues = '渋谷ブルース',
  Sekkachinakatatsumuri = 'せっかちなかたつむり',
  Hitohanazehashirunoka = '人はなぜ走るのか?',
  OtogadenaiGuitar = '音が出ないギター',
  Kairyuunoshimayo = '海流の島よ',
  Kokoronokusuri = '心の薬',
  Guuzenwoiiwakenishite = '偶然を言い訳にして',
  Mizutamamoyou = '水玉模様',
  House = 'ハウス!',
  Nogizakanouta = '乃木坂の詩',
  Aitakattakamoshirenai = '会いたかったかもしれない',
  Ushinaitakunaikara = '失いたくないから',
  Shiroikumoninotte = '白い雲にのって',
  Darekahamikata = '誰かは味方',
  Kakumeinouma = '革命の馬',
  Bokugairubasho = '僕がいる場所',
  Anatanotamenihikitai = 'あなたのために弾きたい',
  Keishasuru = '傾斜する',
  Nazonorakugaki = 'なぞの落書き',
  Jiyuunokanata = '自由の彼方',
  Hitoriyogari = 'ひとりよがり',
  Kikkake = 'きっかけ',
  Taiyounikudokarete = '太陽に口説かれて',
  YokubouReincarnation = '欲望のリインカーネーション',
  Kuukikann = '空気感',
  Kougouseikibou = '光合成希望',
  ThreefoldChoice = 'Threefold choice',
  TeitaionnoKiss = '低体温のキス',
  ShitsurenshitaraKaowoarae = '失恋したら、顔を洗え!',
  Kakigoorinokataomoi = 'かき氷の片想い',
  Kanjyourokugousen = '環状六号線',
  Kuchiyakusoku = '口約束',
  Skydiving = 'スカイダイビング',
  Kimigaaoidekureta = '君が扇いでくれた',
  OmoideFirst = '思い出ファースト',
  Setteiondo = '設定温度',
  RewindAnohi = 'Rewindあの日',
  GomenneSmoothie = 'ごめんね、スムージー',
  Minikuiwatashi = '醜い私',
  Kataikaranoyounidakishimetai = '硬い殻のように抱きしめたい',
  Mangetsugakieta = '満月が消えた',
  Watabokori = 'ワタボコリ',
  RyuuseiDiscotic = '流星ディスコティック',
  Boukyakutobigaku = '忘却と美学',
  Jibunnokoto = '自分のこと',
  UnuboreBeach = '自惚れビーチ',
  Sonohito = 'その女',
  Dareyorimosobaniitai = '誰よりそばにいたい',
  Arigachinarenai = 'ありがちな恋愛',
  Moshikimigainakereba = 'もし君がいなければ',
  KissNoshuriken = 'キスの手裏剣',
  Hoozuewotsuitehanemurenai = '頬杖をついては眠れない',
  Bocchitou = 'ぼっち党',
  Sayuringoboshuuchuu = 'さゆりんご募集中',
  Gorugonzora = 'ゴルゴンゾーラ',
  MousuguZambidensetsu = 'もうすぐ～ザンビ伝説～',
  Overture = 'OVERTURE',
}

const SongsTitleKeyArray: TitleKeyArray<SongTitle> = [
  {
    title: SongTitle.YuujouPierce,
    key: 'yuujoupierce',
  },
  {
    title: SongTitle.Ashigaaruriyuu,
    key: 'ashitagaaruriyuu',
  },
  {
    title: SongTitle.WildernessWorld,
    key: 'wildernessworld',
  },
  {
    title: SongTitle.KuchihodonimonaiKiss,
    key: 'kuchihodonimonaikiss',
  },
  {
    title: SongTitle.OutOfTheBlue,
    key: 'outoftheblue',
  },
  {
    title: SongTitle.Tsumetaimizunonaka,
    key: 'tsumetaimizunonaka',
  },
  {
    title: SongTitle.Bokuhabokuwosukininaru,
    key: 'bokuhabokuwosukininaru',
  },
  {
    title: SongTitle.Route246,
    key: 'route246',
  },
  {
    title: SongTitle.Sekainorinjinyo,
    key: 'sekainorinjinyo',
  },
  {
    title: SongTitle.Shiawasenohogoshoku,
    key: 'hogoshoku',
  },
  {
    title: SongTitle.SayonaraStayWithMe,
    key: 'staywithme',
  },
  {
    title: SongTitle.Jaane,
    key: 'jaane',
  },
  {
    title: SongTitle.Anastasia,
    key: 'anastasia',
  },
  {
    title: SongTitle.MainichigaBrandNewDay,
    key: 'brandnewday',
  },
  {
    title: SongTitle.ISee,
    key: 'isee',
  },
  {
    title: SongTitle.FantasticSanshokupan,
    key: 'fantastic',
  },
  {
    title: SongTitle.Bokunoomoikomi,
    key: 'bokunoomoikomi',
  },
  {
    title: SongTitle.DoMyBestJaimiganai,
    key: 'domybest',
  },
  {
    title: SongTitle.Tokidokiomoidashitekudasai,
    key: 'tokidokiomoidashite',
  },
  {
    title: SongTitle.Toshoshitsunokimihe,
    key: 'toshoshitsu',
  },
  {
    title: SongTitle.Romendenshanomachi,
    key: 'romendensha',
  },
  {
    title: SongTitle.Bokunokotoshitteru,
    key: 'bokunokoto',
  },
  {
    title: SongTitle.Yoakemadetsuyogaranakutemoii,
    key: 'yoakemade',
  },
  {
    title: SongTitle.SingOut,
    key: 'singout',
  },
  {
    title: SongTitle.Kassouro,
    key: 'kassouro',
  },
  {
    title: SongTitle.Noyounasonzai,
    key: 'noyounasonzai',
  },
  {
    title: SongTitle.AmILoving,
    key: 'amiloving',
  },
  {
    title: SongTitle.Heikousen,
    key: 'heikousen',
  },
  {
    title: SongTitle.Yonbanmenohikari,
    key: 'yonbanmenohikari',
  },
  {
    title: SongTitle.Aimai,
    key: 'aimai',
  },
  {
    title: SongTitle.Kaerimichihatoomawarishitakunaru,
    key: 'kaerimichi',
  },
  {
    title: SongTitle.Jikochudeikou,
    key: 'jikochu',
  },
  {
    title: SongTitle.Synchronicity,
    key: 'synchronicity',
  },
  {
    title: SongTitle.Itsukadekirukarakyoudekiru,
    key: 'itsukadekiru',
  },
  {
    title: SongTitle.Nigemizu,
    key: 'nigemizu',
  },
  {
    title: SongTitle.Influencer,
    key: 'influencer',
  },
  {
    title: SongTitle.Sayonaranoimi,
    key: 'sayonaranoimi',
  },
  {
    title: SongTitle.HadashideSummer,
    key: 'hadasummer',
  },
  {
    title: SongTitle.Harujiongasakugoro,
    key: 'harujion',
  },
  {
    title: SongTitle.ImaHanashitaidarekagairu,
    key: 'imahana',
  },
  {
    title: SongTitle.TaiyouKnock,
    key: 'taiyouknock',
  },
  {
    title: SongTitle.Inochihautsukushii,
    key: 'inochihautsukushii',
  },
  {
    title: SongTitle.Nandomenoaozoraka,
    key: 'nandomenoaozoraka',
  },
  {
    title: SongTitle.NatsunoFreeAndEasy,
    key: 'natsunofreeeasy',
  },
  {
    title: SongTitle.Kiduitarakataomoi,
    key: 'kiduitarakataomoi',
  },
  {
    title: SongTitle.Valletta,
    key: 'valletta',
  },
  {
    title: SongTitle.GirlsRule,
    key: 'girlsrule',
  },
  {
    title: SongTitle.Kiminonahakibou,
    key: 'kiminonahakibou',
  },
  {
    title: SongTitle.SeifukunoMannequin,
    key: 'seifukunomannequin',
  },
  {
    title: SongTitle.HashireBicycle,
    key: 'hashirebicycle',
  },
  {
    title: SongTitle.Oideshampo,
    key: 'oideshampo',
  },
  {
    title: SongTitle.GuruguruCurtain,
    key: 'gurugurucurtain',
  },
  {
    title: SongTitle.Nichijou,
    key: 'nichijou',
  },
  {
    title: SongTitle.Sankakunoakichi,
    key: 'sankakunoakichi',
  },
  {
    title: SongTitle.Atarashiisekai,
    key: 'atarashiisekai',
  },
  {
    title: SongTitle.MyRule,
    key: 'myrule',
  },
  {
    title: SongTitle.Under,
    key: 'under',
  },
  {
    title: SongTitle.Fusuenhaikiteiru,
    key: 'fusuenhaikiteiru',
  },
  {
    title: SongTitle.Bulanko,
    key: 'bulanko',
  },
  {
    title: SongTitle.SecretGravity,
    key: 'secretgravity',
  },
  {
    title: SongTitle.Futoogo,
    key: 'futoogo',
  },
  {
    title: SongTitle.Shittonokenri,
    key: 'shittonokenri',
  },
  {
    title: SongTitle.WakaregiwaMottosukininaru,
    key: 'wakaregiwa',
  },
  {
    title: SongTitle.Kimihabokutotoawanaihougayokattanokana,
    key: 'kimihabokuto',
  },
  {
    title: SongTitle.Anohibokuhausowotsuita,
    key: 'anohibokuha',
  },
  {
    title: SongTitle.Kokoniiruriyuu,
    key: 'kokoniiruriyuu',
  },
  {
    title: SongTitle.Umaretamamade,
    key: 'umaretamamade',
  },
  {
    title: SongTitle.Hatsukoinohitowoimademo,
    key: 'hatsukoinohitowo',
  },
  {
    title: SongTitle.Senpuuki,
    key: 'senpuuki',
  },
  {
    title: SongTitle.Jyuusannichinokinyoubi,
    key: '13nichinokinyoubi',
  },
  {
    title: SongTitle.HarunoMelody,
    key: 'harunomelody',
  },
  {
    title: SongTitle.Namidagamadakanashimidattakoro,
    key: 'namidagamadakanashimi',
  },
  {
    title: SongTitle.Ookaminikuchibuewo,
    key: 'ookaminikuchibuewo',
  },
  {
    title: SongTitle.Hidarimunenoyuuki,
    key: 'hidarimunenoyuuki',
  },
  {
    title: SongTitle.CaravanHanemuranai,
    key: 'caravan',
  },
  {
    title: SongTitle.Tsuduku,
    key: 'tsuduku',
  },
  {
    title: SongTitle.Kokuhakunojunban,
    key: 'kokuhakunojunban',
  },
  {
    title: SongTitle.ChopinNousotsuki,
    key: 'chopinnousotsuki',
  },
  {
    title: SongTitle.Shiritaikoto,
    key: 'shiritaikoto',
  },
  {
    title: SongTitle.Soratobira,
    key: 'soratobira',
  },
  {
    title: SongTitle.Jibunjanaikanji,
    key: 'jibunjanaikanji',
  },
  {
    title: SongTitle.KokoronoMonolog,
    key: 'kokoronomonolog',
  },
  {
    title: SongTitle.Chikyuugamaruinara,
    key: 'chikyuugamaruinara',
  },
  {
    title: SongTitle.Annanisukidattanoni,
    key: 'annarisukidatta',
  },
  {
    title: SongTitle.Against,
    key: 'against',
  },
  {
    title: SongTitle.Kumoninarebaii,
    key: 'kumoninarebaii',
  },
  {
    title: SongTitle.ScoutMan,
    key: 'scoutman',
  },
  {
    title: SongTitle.Tokitokimekimeki,
    key: 'tokitokimekimeki',
  },
  {
    title: SongTitle.Kotodamahou,
    key: 'kotodamahou',
  },
  {
    title: SongTitle.Fumenshou,
    key: 'fumenshou',
  },
  {
    title: SongTitle.Maaiika,
    key: 'maaiika',
  },
  {
    title: SongTitle.Shitsurenosoujinin,
    key: 'shirenosoujinin',
  },
  {
    title: SongTitle.Bokunoshoudou,
    key: 'bokunoshoudou',
  },
  {
    title: SongTitle.Atarashiikafun,
    key: 'atarashiikafun',
  },
  {
    title: SongTitle.Onnahahitorijanemurenai,
    key: 'onnahahitorija',
  },
  {
    title: SongTitle.Hitonatsunonagasayori,
    key: 'hitonatsunonagasa',
  },
  {
    title: SongTitle.Naitatteiijanaika,
    key: 'naitatteiijanaika',
  },
  {
    title: SongTitle.LiveShin,
    key: 'liveshin',
  },
  {
    title: SongTitle.Mirainokotae,
    key: 'mirainokotae',
  },
  {
    title: SongTitle.Jinseiwokangaetakunaru,
    key: 'jinseiwokangaetakunaru',
  },
  {
    title: SongTitle.IgaiBreak,
    key: 'igaibreak',
  },
  {
    title: SongTitle.AnotherGhost,
    key: 'anotherghost',
  },
  {
    title: SongTitle.Sanbanmenokaze,
    key: 'sanbanmenokaze',
  },
  {
    title: SongTitle.Atarisawarinonaihanashi,
    key: 'atarisawarinonaihanashi',
  },
  {
    title: SongTitle.Kodokunaaozora,
    key: 'kodokunaaozora',
  },
  {
    title: SongTitle.Anokyoushitsu,
    key: 'anokyoushitsu',
  },
  {
    title: SongTitle.Nidomenokisskara,
    key: 'nidomenokisskara',
  },
  {
    title: SongTitle.Kiminiokuruhanaganai,
    key: 'kiminiokuruhanaganai',
  },
  {
    title: SongTitle.Naimononedari,
    key: 'naimononedari',
  },
  {
    title: SongTitle.Bokudakenohikari,
    key: 'bokudakenohikari',
  },
  {
    title: SongTitle.OffshoreGirl,
    key: 'offshoregirl',
  },
  {
    title: SongTitle.Inochinoshinjitsu,
    key: 'inochinoshinjitsu',
  },
  {
    title: SongTitle.Hakumaisama,
    key: 'hakumaisama',
  },
  {
    title: SongTitle.Ikuatenonaibokutachi,
    key: 'ikuatenonaibokutachi',
  },
  {
    title: SongTitle.HarukanaruBhutan,
    key: 'harukanarubhutan',
  },
  {
    title: SongTitle.Tsuyogarutsubomi,
    key: 'tsuyogarutsubomi',
  },
  {
    title: SongTitle.Kyuushamen,
    key: 'kyuushamen',
  },
  {
    title: SongTitle.Tsuribori,
    key: 'tsuribori',
  },
  {
    title: SongTitle.Yuuutsutofuusengamu,
    key: 'yuuutsutofuusengamu',
  },
  {
    title: SongTitle.Popipappappa,
    key: 'popipappappa',
  },
  {
    title: SongTitle.Otonahenochikamichi,
    key: 'otonahenochikamichi',
  },
  {
    title: SongTitle.Kanashiminowasurekata,
    key: 'kanashiminowasurekata',
  },
  {
    title: SongTitle.Sukima,
    key: 'sukima',
  },
  {
    title: SongTitle.Mousukoshinoyume,
    key: 'mousukoshinoyume',
  },
  {
    title: SongTitle.SakanatachinoLoveSong,
    key: 'sakanatachinolovesong',
  },
  {
    title: SongTitle.Muhyoujyou,
    key: 'muhyoujyou',
  },
  {
    title: SongTitle.Hanenokioku,
    key: 'hanenokioku',
  },
  {
    title: SongTitle.Seifukuwonuidesayonarawo,
    key: 'seifukuwonuidesayonarawo',
  },
  {
    title: SongTitle.ArakajimekatarareruRomance,
    key: 'arakajimekatarareruromance',
  },
  {
    title: SongTitle.Tachinaorichuu,
    key: 'tachinaorichuu',
  },
  {
    title: SongTitle.GomenneZutto,
    key: 'gomennezutto',
  },
  {
    title: SongTitle.Border,
    key: 'border',
  },
  {
    title: SongTitle.Toomawarinoaijou,
    key: 'toomawarinoaijou',
  },
  {
    title: SongTitle.Korogattakanewonarase,
    key: 'korogattakanewonarase',
  },
  {
    title: SongTitle.Watashiokiru,
    key: 'watashiokiru',
  },
  {
    title: SongTitle.TenderDays,
    key: 'tenderdays',
  },
  {
    title: SongTitle.Nanimodekizunisobaniiru,
    key: 'nanimodekizunisobaniiru',
  },
  {
    title: SongTitle.Sonosakinodeguchi,
    key: 'sonosakinodeguchi',
  },
  {
    title: SongTitle.MukuchinaLion,
    key: 'mukuchinalion',
  },
  {
    title: SongTitle.Bokugaikanakyadaregaikunda,
    key: 'bokugaikanakyadaregaikunda',
  },
  {
    title: SongTitle.RomanceNoStart,
    key: 'romancenostart',
  },
  {
    title: SongTitle.ToikiMethod,
    key: 'toikimethod',
  },
  {
    title: SongTitle.Kodokukyoudai,
    key: 'kodokukyoudai',
  },
  {
    title: SongTitle.Dankeschan,
    key: 'dankeschan',
  },
  {
    title: SongTitle.Tsukinoookisa,
    key: 'tsukinoookisa',
  },
  {
    title: SongTitle.WatashinotameniDarekanotameni,
    key: 'watanotamenidarekanotameni',
  },
  {
    title: SongTitle.Sonnabakana,
    key: 'sonnabakana',
  },
  {
    title: SongTitle.Yasashisatoha,
    key: 'yasashisatoha',
  },
  {
    title: SongTitle.SekaideichibanKodokuraLover,
    key: 'sekaideichibankodokuralover',
  },
  {
    title: SongTitle.Koumoriyo,
    key: 'koumoriyo',
  },
  {
    title: SongTitle.Hokanohoshikara,
    key: 'hokanohoshikara',
  },
  {
    title: SongTitle.Ningentoiugakki,
    key: 'ningentoiugakki',
  },
  {
    title: SongTitle.Shakism,
    key: 'shakism',
  },
  {
    title: SongTitle.RomanticIkayaki,
    key: 'romanticikayaki',
  },
  {
    title: SongTitle.Dekopin,
    key: 'dekopin',
  },
  {
    title: SongTitle.PsychokinesesNokanousei,
    key: 'psychokinesesnokanousei',
  },
  {
    title: SongTitle.Yubibouenkyou,
    key: 'yubibouenkyou',
  },
  {
    title: SongTitle.Yasashisanaramaniatteiru,
    key: 'yasashisanaramaniatteiru',
  },
  {
    title: SongTitle.Kokojanaidokoka,
    key: 'kokojanaidokoka',
  },
  {
    title: SongTitle.ShibuyaBlues,
    key: 'shibuyablues',
  },
  {
    title: SongTitle.Sekkachinakatatsumuri,
    key: 'sekkachinakatatsumuri',
  },
  {
    title: SongTitle.Hitohanazehashirunoka,
    key: 'hitohanazehashirunoka',
  },
  {
    title: SongTitle.OtogadenaiGuitar,
    key: 'otogadenaiguitar',
  },
  {
    title: SongTitle.Kairyuunoshimayo,
    key: 'kairyuunoshimayo',
  },
  {
    title: SongTitle.Kokoronokusuri,
    key: 'kokoronokusuri',
  },
  {
    title: SongTitle.Guuzenwoiiwakenishite,
    key: 'guuzenwoiiwakenishite',
  },
  {
    title: SongTitle.Mizutamamoyou,
    key: 'mizutamamoyou',
  },
  {
    title: SongTitle.House,
    key: 'house',
  },
  {
    title: SongTitle.Nogizakanouta,
    key: 'nogizakanouta',
  },
  {
    title: SongTitle.Aitakattakamoshirenai,
    key: 'aitakattakamoshirenai',
  },
  {
    title: SongTitle.Ushinaitakunaikara,
    key: 'ushinaitakunaikara',
  },
  {
    title: SongTitle.Shiroikumoninotte,
    key: 'shiroikumoninotte',
  },
  {
    title: SongTitle.Darekahamikata,
    key: 'darekahamikata',
  },
  {
    title: SongTitle.Kakumeinouma,
    key: 'kakumeinouma',
  },
  {
    title: SongTitle.Bokugairubasho,
    key: 'bokugairubasho',
  },
  {
    title: SongTitle.Anatanotamenihikitai,
    key: 'anatanotamenihikitai',
  },
  {
    title: SongTitle.Keishasuru,
    key: 'keishasuru',
  },
  {
    title: SongTitle.Nazonorakugaki,
    key: 'nazonorakugaki',
  },
  {
    title: SongTitle.Jiyuunokanata,
    key: 'jiyuunokanata',
  },
  {
    title: SongTitle.Hitoriyogari,
    key: 'hitoriyogari',
  },
  {
    title: SongTitle.Kikkake,
    key: 'kikkake',
  },
  {
    title: SongTitle.Taiyounikudokarete,
    key: 'taiyounikudokarete',
  },
  {
    title: SongTitle.YokubouReincarnation,
    key: 'yokuboureincarnation',
  },
  {
    title: SongTitle.Kuukikann,
    key: 'kuukikann',
  },
  {
    title: SongTitle.Kougouseikibou,
    key: 'kougouseikibou',
  },
  {
    title: SongTitle.ThreefoldChoice,
    key: 'threefoldchoice',
  },
  {
    title: SongTitle.TeitaionnoKiss,
    key: 'teitaionnokiss',
  },
  {
    title: SongTitle.ShitsurenshitaraKaowoarae,
    key: 'shitsurenshitarakaowoarae',
  },
  {
    title: SongTitle.Kakigoorinokataomoi,
    key: 'kakigoorinokataomoi',
  },
  {
    title: SongTitle.Kanjyourokugousen,
    key: 'kanjyourokugousen',
  },
  {
    title: SongTitle.Kuchiyakusoku,
    key: 'kuchiyakusoku',
  },
  {
    title: SongTitle.Skydiving,
    key: 'skydiving',
  },
  {
    title: SongTitle.Kimigaaoidekureta,
    key: 'kimigaaoidekureta',
  },
  {
    title: SongTitle.OmoideFirst,
    key: 'omoidefirst',
  },
  {
    title: SongTitle.Setteiondo,
    key: 'setteiondo',
  },
  {
    title: SongTitle.RewindAnohi,
    key: 'rewindanohi',
  },
  {
    title: SongTitle.GomenneSmoothie,
    key: 'gomennesmoothie',
  },
  {
    title: SongTitle.Minikuiwatashi,
    key: 'minikuiwatashi',
  },
  {
    title: SongTitle.Kataikaranoyounidakishimetai,
    key: 'kataikaranoyounidakishimetai',
  },
  {
    title: SongTitle.Mangetsugakieta,
    key: 'mangetsugakieta',
  },
  {
    title: SongTitle.Watabokori,
    key: 'watabokori',
  },
  {
    title: SongTitle.RyuuseiDiscotic,
    key: 'ryuuseidiscotic',
  },
  {
    title: SongTitle.Boukyakutobigaku,
    key: 'boukyakutobigaku',
  },
  {
    title: SongTitle.Jibunnokoto,
    key: 'jibunnokoto',
  },
  {
    title: SongTitle.UnuboreBeach,
    key: 'unuborebeach',
  },
  {
    title: SongTitle.Sonohito,
    key: 'sonohito',
  },
  {
    title: SongTitle.Dareyorimosobaniitai,
    key: 'dareyorimosobaniitai',
  },
  {
    title: SongTitle.Arigachinarenai,
    key: 'arigachinarenai',
  },
  {
    title: SongTitle.Moshikimigainakereba,
    key: 'moshikimigainakereba',
  },
  {
    title: SongTitle.KissNoshuriken,
    key: 'kissnoshuriken',
  },
  {
    title: SongTitle.Hoozuewotsuitehanemurenai,
    key: 'hoozuewotsuitehanemurenai',
  },
  {
    title: SongTitle.Bocchitou,
    key: 'bocchitou',
  },
  {
    title: SongTitle.Sayuringoboshuuchuu,
    key: 'sayuringoboshuuchuu',
  },
  {
    title: SongTitle.Gorugonzora,
    key: 'gorugonzora',
  },
  {
    title: SongTitle.MousuguZambidensetsu,
    key: 'mousuguzambidensetsu',
  },
  {
    title: SongTitle.Overture,
    key: 'overture',
  },
].map(titleKey => ({
  ...titleKey,
  // Make sure all keys are lower-cased
  key: titleKey.key.toLowerCase(),
}));

export const SONGS = arrayToObject(SongsTitleKeyArray, 'title');
