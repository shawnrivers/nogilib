import { DiscographyRaw } from 'db/src/actors/Discography/models';
import { createSingleRaw } from 'db/src/actors/Discography/raw/creators';

export const FIRST_SINGLE: DiscographyRaw = createSingleRaw({
  title: 'ぐるぐるカーテン',
  number: '1',
  release: '2012-02-22',
  cdTypes: ['A', 'B', 'C', 'T'],
  songs: [
    {
      title: 'ぐるぐるカーテン',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '左胸の勇気',
      inCdType: ['A', 'B', 'C', 'T'],
    },
    {
      title: '乃木坂の詩',
      inCdType: ['A'],
    },
    {
      title: '会いたかったかもしれない',
      inCdType: ['B'],
    },
    {
      title: '失いたくないから',
      inCdType: ['C'],
    },
    {
      title: '白い雲にのって',
      inCdType: ['T'],
    },
  ],
  underMembers: [
    'andoumikumo',
    'iwaseyumiko',
    'itounene',
    'hatanakaseira',
    'itoumarika',
    'wadamaaya',
    'nakamotohimeka',
    'saitouchiharu',
    'yamatorina',
    'nagashimaseira',
    'higuchihina',
    'kawagohina',
    'wakatsukiyumi',
    'kashiwayukina',
    'etoumisa',
    'fukagawamai',
    'miyazawaseira',
  ],
  skips: ['akimotomanatsu'],
});
