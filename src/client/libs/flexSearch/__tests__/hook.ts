import { tokenize } from 'client/libs/flexSearch/hook';

describe('tokenize', () => {
  test('should split English by space', () => {
    expect(tokenize('齋藤飛鳥')).toEqual(['齋', '藤', '飛', '鳥']);
  });

  test('should split Japanese by character', () => {
    expect(tokenize('sing out')).toEqual(['sing', 'out']);
  });

  test('should split each language correctly when combined without spaces', () => {
    expect(tokenize('裸足でSummer')).toEqual(['裸', '足', 'で', 'Summer']);
    expect(tokenize('走れ!Bicycle')).toEqual(['走', 'れ', '!', 'Bicycle']);
    expect(tokenize('Rewindあの日')).toEqual(['Rewind', 'あ', 'の', '日']);
    expect(tokenize('～Do my best～じゃ意味はない')).toEqual([
      '～',
      'Do',
      'my',
      'best',
      '～',
      'じ',
      'ゃ',
      '意',
      '味',
      'は',
      'な',
      'い',
    ]);
  });
});
