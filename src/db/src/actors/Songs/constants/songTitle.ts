import { arrayToObject } from 'utils/array';
import { ArrayElement } from 'types/common';

const SongsTitleKeyArray = (
  [
    { title: '好きになってみた', key: 'sukininattemita' },
    { title: '絶望の一秒前', key: 'zetsubounoichibyoumae' },
    { title: '届かなくたって…', key: 'todokanakudatte' },
    { title: '忘れないといいな', key: 'wasurenaitoiina' },
    { title: '価値あるもの', key: 'kachiarumono' },
    { title: '深読み', key: 'fukayomi' },
    { title: 'Actually...', key: 'actually' },
    { title: 'Hard to say', key: 'hardtosay' },
    { title: 'あなたからの卒業', key: 'anatakaranosotsugyo' },
    { title: '歳月の轍', key: 'tokinowadachi' },
    { title: 'ゆっくりと咲く花', key: 'yukkuritosakuhana' },
    { title: '最後のTight Hug', key: 'saigonotighthug' },
    { title: '他人のそら似', key: 'taninnosorane' },
    { title: '泥だらけ', key: 'dorodarake' },
    { title: '私の色', key: 'watashinoiro' },
    { title: 'もしも心が透明なら', key: 'moshimokokorogatoumeinara' },
    { title: 'マシンガンレイン', key: 'machinegunrain' },
    { title: 'やさしいだけなら', key: 'yasashidakenara' },
    { title: '君に叱られた', key: 'kiminishikarareta' },
    { title: 'さ～ゆ～Ready？', key: 'sayuready' },
    { title: 'ざんぶざざぶん', key: 'zanbuzazabun' },
    {
      title: '錆びたコンパス',
      key: 'aabitacompass',
    },
    {
      title: '全部　夢のまま',
      key: 'zenbuyumenomama',
    },
    {
      title: '大人たちには指示されない',
      key: 'otonatachinihashihaisarenai',
    },
    {
      title: '猫舌カモミールティー',
      key: 'nekojitachamomiletea',
    },
    {
      title: 'ごめんねFingers crossed',
      key: 'gomennefingerscrossed',
    },
    {
      title: '１・２・３',
      key: '123',
    },
    {
      title: '友情ピアス',
      key: 'yuujoupierce',
    },
    {
      title: '明日がある理由',
      key: 'ashitagaaruriyuu',
    },
    {
      title: 'Wilderness world',
      key: 'wildernessworld',
    },
    {
      title: '口ほどにもないKISS',
      key: 'kuchihodonimonaikiss',
    },
    {
      title: 'Out of the blue',
      key: 'outoftheblue',
    },
    {
      title: '冷たい水の中',
      key: 'tsumetaimizunonaka',
    },
    {
      title: '僕は僕を好きになる',
      key: 'bokuhabokuwosukininaru',
    },
    {
      title: 'Route 246',
      key: 'route246',
    },
    {
      title: '世界中の隣人よ',
      key: 'sekainorinjinyo',
    },
    {
      title: 'しあわせの保護色',
      key: 'hogoshoku',
    },
    {
      title: 'サヨナラ Stay with me',
      key: 'staywithme',
    },
    {
      title: 'じゃあね。',
      key: 'jaane',
    },
    {
      title: 'アナスターシャ',
      key: 'anastasia',
    },
    {
      title: '毎日がBrand new day',
      key: 'brandnewday',
    },
    {
      title: 'I see…',
      key: 'isee',
    },
    {
      title: 'ファンタスティック三色パン',
      key: 'fantastic',
    },
    {
      title: '僕の思い込み',
      key: 'bokunoomoikomi',
    },
    {
      title: '～Do my best～じゃ意味はない',
      key: 'domybest',
    },
    {
      title: '時々 思い出してください',
      key: 'tokidokiomoidashite',
    },
    {
      title: '図書室の君へ',
      key: 'toshoshitsu',
    },
    {
      title: '路面電車の街',
      key: 'romendensha',
    },
    {
      title: '僕のこと、知ってる?',
      key: 'bokunokoto',
    },
    {
      title: '夜明けまで強がらなくてもいい',
      key: 'yoakemade',
    },
    {
      title: 'Sing Out!',
      key: 'singout',
    },
    {
      title: '滑走路',
      key: 'kassouro',
    },
    {
      title: 'のような存在',
      key: 'noyounasonzai',
    },
    {
      title: 'Am I Loving?',
      key: 'amiloving',
    },
    {
      title: '平行線',
      key: 'heikousen',
    },
    {
      title: '4番目の光',
      key: 'yonbanmenohikari',
    },
    {
      title: '曖昧',
      key: 'aimai',
    },
    {
      title: '帰り道は遠回りしたくなる',
      key: 'kaerimichi',
    },
    {
      title: 'ジコチューで行こう!',
      key: 'jikochu',
    },
    {
      title: 'シンクロニシティ',
      key: 'synchronicity',
    },
    {
      title: 'いつかできるから今日できる',
      key: 'itsukadekiru',
    },
    {
      title: '逃げ水',
      key: 'nigemizu',
    },
    {
      title: 'インフルエンサー',
      key: 'influencer',
    },
    {
      title: 'サヨナラの意味',
      key: 'sayonaranoimi',
    },
    {
      title: '裸足でSummer',
      key: 'hadasummer',
    },
    {
      title: 'ハルジオンが咲く頃',
      key: 'harujion',
    },
    {
      title: '今、話したい誰かがいる',
      key: 'imahana',
    },
    {
      title: '太陽ノック',
      key: 'taiyouknock',
    },
    {
      title: '命は美しい',
      key: 'inochihautsukushii',
    },
    {
      title: '何度目の青空か?',
      key: 'nandomenoaozoraka',
    },
    {
      title: '夏のFree&Easy',
      key: 'natsunofreeeasy',
    },
    {
      title: '気づいたら片想い',
      key: 'kiduitarakataomoi',
    },
    {
      title: 'バレッタ',
      key: 'valletta',
    },
    {
      title: 'ガールズルール',
      key: 'girlsrule',
    },
    {
      title: '君の名は希望',
      key: 'kiminonahakibou',
    },
    {
      title: '制服のマネキン',
      key: 'seifukunomannequin',
    },
    {
      title: '走れ!Bicycle',
      key: 'hashirebicycle',
    },
    {
      title: 'おいでシャンプー',
      key: 'oideshampo',
    },
    {
      title: 'ぐるぐるカーテン',
      key: 'gurugurucurtain',
    },
    {
      title: '日常',
      key: 'nichijou',
    },
    {
      title: '三角の空き地',
      key: 'sankakunoakichi',
    },
    {
      title: '新しい世界',
      key: 'atarashiisekai',
    },
    {
      title: 'My rule',
      key: 'myrule',
    },
    {
      title: 'アンダー',
      key: 'under',
    },
    {
      title: '風船は生きている',
      key: 'fusuenhaikiteiru',
    },
    {
      title: 'ブランコ',
      key: 'bulanko',
    },
    {
      title: 'シークレットグラフィティー',
      key: 'secretgravity',
    },
    {
      title: '不等号',
      key: 'futoogo',
    },
    {
      title: '嫉妬の権利',
      key: 'shittonokenri',
    },
    {
      title: '別れ際、もっと好きになる',
      key: 'wakaregiwa',
    },
    {
      title: '君は僕と会わない方がよかったのかな',
      key: 'kimihabokuto',
    },
    {
      title: 'あの日 僕は咄嗟に嘘をついた',
      key: 'anohibokuha',
    },
    {
      title: 'ここにいる理由',
      key: 'kokoniiruriyuu',
    },
    {
      title: '生まれたままで',
      key: 'umaretamamade',
    },
    {
      title: '初恋の人を今でも',
      key: 'hatsukoinohitowo',
    },
    {
      title: '扇風機',
      key: 'senpuuki',
    },
    {
      title: '13日の金曜日',
      key: '13nichinokinyoubi',
    },
    {
      title: '春のメロディー',
      key: 'harunomelody',
    },
    {
      title: '涙がまだ悲しみだった頃',
      key: 'namidagamadakanashimi',
    },
    {
      title: '狼に口笛を',
      key: 'ookaminikuchibuewo',
    },
    {
      title: '左胸の勇気',
      key: 'hidarimunenoyuuki',
    },
    {
      title: 'キャラバンは眠らない',
      key: 'caravan',
    },
    {
      title: 'つづく',
      key: 'tsuduku',
    },
    {
      title: '告白の順番',
      key: 'kokuhakunojunban',
    },
    {
      title: 'ショパンの嘘つき',
      key: 'chopinnousotsuki',
    },
    {
      title: '知りたいこと',
      key: 'shiritaikoto',
    },
    {
      title: '空扉',
      key: 'soratobira',
    },
    {
      title: '自分じゃない感じ',
      key: 'jibunjanaikanji',
    },
    {
      title: '心のモノローグ',
      key: 'kokoronomonolog',
    },
    {
      title: '地球が丸いなら',
      key: 'chikyuugamaruinara',
    },
    {
      title: 'あんなに好きだったのに...',
      key: 'annarisukidatta',
    },
    {
      title: 'Against',
      key: 'against',
    },
    {
      title: '雲になればいい',
      key: 'kumoninarebaii',
    },
    {
      title: 'スカウトマン',
      key: 'scoutman',
    },
    {
      title: 'トキトキメキメキ',
      key: 'tokitokimekimeki',
    },
    {
      title: '言霊砲',
      key: 'kotodamahou',
    },
    {
      title: '不眠症',
      key: 'fumenshou',
    },
    {
      title: 'まあいいか?',
      key: 'maaiika',
    },
    {
      title: '失恋お掃除人',
      key: 'shirenosoujinin',
    },
    {
      title: '僕の衝動',
      key: 'bokunoshoudou',
    },
    {
      title: '新しい花粉 〜ミュージカル「見知らぬ世界」より〜',
      key: 'atarashiikafun',
    },
    {
      title: '女は一人じゃ眠れない',
      key: 'onnahahitorija',
    },
    {
      title: 'ひと夏の長さより…',
      key: 'hitonatsunonagasa',
    },
    {
      title: '泣いたっていいじゃないか?',
      key: 'naitatteiijanaika',
    },
    {
      title: 'ライブ神',
      key: 'liveshin',
    },
    {
      title: '未来の答え',
      key: 'mirainokotae',
    },
    {
      title: '人生を考えたくなる',
      key: 'jinseiwokangaetakunaru',
    },
    {
      title: '意外BREAK',
      key: 'igaibreak',
    },
    {
      title: 'Another Ghost',
      key: 'anotherghost',
    },
    {
      title: '三番目の風',
      key: 'sanbanmenokaze',
    },
    {
      title: '当たり障りのない話',
      key: 'atarisawarinonaihanashi',
    },
    {
      title: '孤独な青空',
      key: 'kodokunaaozora',
    },
    {
      title: 'あの教室',
      key: 'anokyoushitsu',
    },
    {
      title: '2度目のキスから',
      key: 'nidomenokisskara',
    },
    {
      title: '君に贈る花がない',
      key: 'kiminiokuruhanaganai',
    },
    {
      title: 'ないものねだり',
      key: 'naimononedari',
    },
    {
      title: '僕だけの光',
      key: 'bokudakenohikari',
    },
    {
      title: 'オフショアガール',
      key: 'offshoregirl',
    },
    {
      title: '命の真実 ミュージカル「林檎売りとカメムシ」',
      key: 'inochinoshinjitsu',
    },
    {
      title: '白米様',
      key: 'hakumaisama',
    },
    {
      title: '行くあてのない僕たち',
      key: 'ikuatenonaibokutachi',
    },
    {
      title: '遥かなるブータン',
      key: 'harukanarubhutan',
    },
    {
      title: '強がる蕾',
      key: 'tsuyogarutsubomi',
    },
    {
      title: '急斜面',
      key: 'kyuushamen',
    },
    {
      title: '釣り堀',
      key: 'tsuribori',
    },
    {
      title: '憂鬱と風船ガム',
      key: 'yuuutsutofuusengamu',
    },
    {
      title: 'ポピパッパパー',
      key: 'popipappappa',
    },
    {
      title: '大人への近道',
      key: 'otonahenochikamichi',
    },
    {
      title: '悲しみの忘れ方',
      key: 'kanashiminowasurekata',
    },
    {
      title: '隙間',
      key: 'sukima',
    },
    {
      title: 'もう少しの夢',
      key: 'mousukoshinoyume',
    },
    {
      title: '魚たちのLOVE SONG',
      key: 'sakanatachinolovesong',
    },
    {
      title: '無表情',
      key: 'muhyoujyou',
    },
    {
      title: '羽根の記憶',
      key: 'hanenokioku',
    },
    {
      title: '制服を脱いでサヨナラを…',
      key: 'seifukuwonuidesayonarawo',
    },
    {
      title: 'あらかじめ語られるロマンス',
      key: 'arakajimekatarareruromance',
    },
    {
      title: '立ち直り中',
      key: 'tachinaorichuu',
    },
    {
      title: 'ごめんね ずっと…',
      key: 'gomennezutto',
    },
    {
      title: 'ボーダー',
      key: 'border',
    },
    {
      title: '遠回りの愛情',
      key: 'toomawarinoaijou',
    },
    {
      title: '転がった鐘を鳴らせ!',
      key: 'korogattakanewonarase',
    },
    {
      title: '私、起きる。',
      key: 'watashiokiru',
    },
    {
      title: 'Tender days',
      key: 'tenderdays',
    },
    {
      title: '何もできずにそばにいる',
      key: 'nanimodekizunisobaniiru',
    },
    {
      title: 'その先の出口!',
      key: 'sonosakinodeguchi',
    },
    {
      title: '無口なライオン',
      key: 'mukuchinalion',
    },
    {
      title: '僕が行かなきゃ誰が行くんだ?',
      key: 'bokugaikanakyadaregaikunda',
    },
    {
      title: 'ロマンスのスタート',
      key: 'romancenostart',
    },
    {
      title: '吐息のメソッド',
      key: 'toikimethod',
    },
    {
      title: '孤独兄弟',
      key: 'kodokukyoudai',
    },
    {
      title: 'ダンケシェーン',
      key: 'dankeschan',
    },
    {
      title: '月の大きさ',
      key: 'tsukinoookisa',
    },
    {
      title: '私のために 誰かのために',
      key: 'watanotamenidarekanotameni',
    },
    {
      title: 'そんなバカな…',
      key: 'sonnabakana',
    },
    {
      title: 'やさしさとは',
      key: 'yasashisatoha',
    },
    {
      title: '世界で一番 孤独なLover',
      key: 'sekaideichibankodokuralover',
    },
    {
      title: 'コウモリよ',
      key: 'koumoriyo',
    },
    {
      title: '他の星から',
      key: 'hokanohoshikara',
    },
    {
      title: '人間という楽器',
      key: 'ningentoiugakki',
    },
    {
      title: 'シャキイズム',
      key: 'shakism',
    },
    {
      title: 'ロマンティックいか焼き',
      key: 'romanticikayaki',
    },
    {
      title: 'でこぴん',
      key: 'dekopin',
    },
    {
      title: 'サイコキネシスの可能性',
      key: 'psychokinesesnokanousei',
    },
    {
      title: '指望遠鏡',
      key: 'yubibouenkyou',
    },
    {
      title: 'やさしさなら間に合ってる',
      key: 'yasashisanaramaniatteiru',
    },
    {
      title: 'ここじゃないどこか',
      key: 'kokojanaidokoka',
    },
    {
      title: '渋谷ブルース',
      key: 'shibuyablues',
    },
    {
      title: 'せっかちなかたつむり',
      key: 'sekkachinakatatsumuri',
    },
    {
      title: '人はなぜ走るのか?',
      key: 'hitohanazehashirunoka',
    },
    {
      title: '音が出ないギター',
      key: 'otogadenaiguitar',
    },
    {
      title: '海流の島よ',
      key: 'kairyuunoshimayo',
    },
    {
      title: '心の薬',
      key: 'kokoronokusuri',
    },
    {
      title: '偶然を言い訳にして',
      key: 'guuzenwoiiwakenishite',
    },
    {
      title: '水玉模様',
      key: 'mizutamamoyou',
    },
    {
      title: 'ハウス!',
      key: 'house',
    },
    {
      title: '乃木坂の詩',
      key: 'nogizakanouta',
    },
    {
      title: '会いたかったかもしれない',
      key: 'aitakattakamoshirenai',
    },
    {
      title: '失いたくないから',
      key: 'ushinaitakunaikara',
    },
    {
      title: '白い雲にのって',
      key: 'shiroikumoninotte',
    },
    {
      title: '誰かは味方',
      key: 'darekahamikata',
    },
    {
      title: '革命の馬',
      key: 'kakumeinouma',
    },
    {
      title: '僕がいる場所',
      key: 'bokugairubasho',
    },
    {
      title: 'あなたのために弾きたい',
      key: 'anatanotamenihikitai',
    },
    {
      title: '傾斜する',
      key: 'keishasuru',
    },
    {
      title: 'なぞの落書き',
      key: 'nazonorakugaki',
    },
    {
      title: '自由の彼方',
      key: 'jiyuunokanata',
    },
    {
      title: 'ひとりよがり',
      key: 'hitoriyogari',
    },
    {
      title: 'きっかけ',
      key: 'kikkake',
    },
    {
      title: '太陽に口説かれて',
      key: 'taiyounikudokarete',
    },
    {
      title: '欲望のリインカーネーション',
      key: 'yokuboureincarnation',
    },
    {
      title: '空気感',
      key: 'kuukikann',
    },
    {
      title: '光合成希望',
      key: 'kougouseikibou',
    },
    {
      title: 'Threefold choice',
      key: 'threefoldchoice',
    },
    {
      title: '低体温のキス',
      key: 'teitaionnokiss',
    },
    {
      title: '失恋したら、顔を洗え!',
      key: 'shitsurenshitarakaowoarae',
    },
    {
      title: 'かき氷の片想い',
      key: 'kakigoorinokataomoi',
    },
    {
      title: '環状六号線',
      key: 'kanjyourokugousen',
    },
    {
      title: '口約束',
      key: 'kuchiyakusoku',
    },
    {
      title: 'スカイダイビング',
      key: 'skydiving',
    },
    {
      title: '君が扇いでくれた',
      key: 'kimigaaoidekureta',
    },
    {
      title: '思い出ファースト',
      key: 'omoidefirst',
    },
    {
      title: '設定温度',
      key: 'setteiondo',
    },
    {
      title: 'Rewindあの日',
      key: 'rewindanohi',
    },
    {
      title: 'ごめんね、スムージー',
      key: 'gomennesmoothie',
    },
    {
      title: '醜い私',
      key: 'minikuiwatashi',
    },
    {
      title: '硬い殻のように抱きしめたい',
      key: 'kataikaranoyounidakishimetai',
    },
    {
      title: '満月が消えた',
      key: 'mangetsugakieta',
    },
    {
      title: 'ワタボコリ',
      key: 'watabokori',
    },
    {
      title: '流星ディスコティック',
      key: 'ryuuseidiscotic',
    },
    {
      title: '忘却と美学',
      key: 'boukyakutobigaku',
    },
    {
      title: '自分のこと',
      key: 'jibunnokoto',
    },
    {
      title: '自惚れビーチ',
      key: 'unuborebeach',
    },
    {
      title: 'その女',
      key: 'sonohito',
    },
    {
      title: '誰よりそばにいたい',
      key: 'dareyorimosobaniitai',
    },
    {
      title: 'ありがちな恋愛',
      key: 'arigachinarenai',
    },
    {
      title: 'もし君がいなければ',
      key: 'moshikimigainakereba',
    },
    {
      title: 'キスの手裏剣',
      key: 'kissnoshuriken',
    },
    {
      title: '頬杖をついては眠れない',
      key: 'hoozuewotsuitehanemurenai',
    },
    {
      title: 'ぼっち党',
      key: 'bocchitou',
    },
    {
      title: 'さゆりんご募集中',
      key: 'sayuringoboshuuchuu',
    },
    {
      title: 'ゴルゴンゾーラ',
      key: 'gorugonzora',
    },
    {
      title: 'もうすぐ～ザンビ伝説～',
      key: 'mousuguzambidensetsu',
    },
    {
      title: 'OVERTURE',
      key: 'overture',
    },
    { title: 'タイトル未定', key: 'untitled' },
  ] as const
).map(titleKey => ({
  ...titleKey,
  key: titleKey.key.toLowerCase(),
}));

export type SongTitle = ArrayElement<typeof SongsTitleKeyArray>['title'];

export const SONGS = arrayToObject(SongsTitleKeyArray, 'title');
