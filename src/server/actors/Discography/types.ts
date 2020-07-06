export type SingleTitle =
  | 'しあわせの保護色'
  | '夜明けまで強がらなくてもいい'
  | 'Sing Out!'
  | '帰り道は遠回りしたくなる'
  | 'ジコチューで行こう!'
  | 'シンクロニシティ'
  | 'いつかできるから今日できる'
  | '逃げ水'
  | 'インフルエンサー'
  | 'サヨナラの意味'
  | '裸足でSummer'
  | 'ハルジオンが咲く頃'
  | '今、話したい誰かがいる'
  | '太陽ノック'
  | '命は美しい'
  | '何度目の青空か?'
  | '夏のFree&Easy'
  | '気づいたら片想い'
  | 'バレッタ'
  | 'ガールズルール'
  | '君の名は希望'
  | '制服のマネキン'
  | '走れ!Bicycle'
  | 'おいでシャンプー'
  | 'ぐるぐるカーテン';

export type AlbumTitle =
  | '今が思い出になるまで'
  | '僕だけの君〜Under Super Best〜'
  | '生まれてから初めて見た夢'
  | 'それぞれの椅子'
  | '透明な色';

export type OtherCdTitle = '世界中の隣人よ';

export type CdTitle = SingleTitle | AlbumTitle | OtherCdTitle;

export type FocusPerformersType = 'center' | 'solo' | 'unit' | '';

export type CdType = 'A' | 'B' | 'C' | 'D' | 'T' | 'L' | 'L1' | 'L2';
