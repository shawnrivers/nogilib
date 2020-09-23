import { getLocalizedNth, getLocalizedWords } from 'client/i18n/utils';

describe('getLocalizedNth', () => {
  it('should get the correct CD count', () => {
    expect(getLocalizedNth({ num: '1', unit: 'cd', language: 'en' })).toBe(
      '1st.'
    );
    expect(getLocalizedNth({ num: '1', unit: 'cd', language: 'ja' })).toBe(
      '1枚目'
    );
    expect(getLocalizedNth({ num: '1', unit: 'cd', language: 'zh' })).toBe(
      '第1张'
    );
  });

  it('should get the correct row count', () => {
    expect(getLocalizedNth({ num: '1', unit: 'row', language: 'en' })).toBe(
      '1st. row'
    );
    expect(getLocalizedNth({ num: '1', unit: 'row', language: 'ja' })).toBe(
      '1列目'
    );
    expect(getLocalizedNth({ num: '1', unit: 'row', language: 'zh' })).toBe(
      '第1排'
    );
  });

  it('should get null when the number is invalid', () => {
    expect(getLocalizedNth({ num: 'u', unit: 'row', language: 'en' })).toBe(
      null
    );
  });
});

describe('getLocalizedWords', () => {
  it('should join space between each word in English', () => {
    expect(
      getLocalizedWords({
        words: ['25th.', 'single', 'selected', 'members'],
        language: 'en',
      })
    ).toBe('25th. single selected members');
  });

  it('should join nothing between each word in Japanese and Chinese', () => {
    expect(
      getLocalizedWords({
        words: ['25枚目', 'シングル', '選抜', 'メンバー'],
        language: 'ja',
      })
    ).toBe('25枚目シングル選抜メンバー');

    expect(
      getLocalizedWords({
        words: ['第25张', '单曲', '选拔', '成员'],
        language: 'ja',
      })
    ).toBe('第25张单曲选拔成员');
  });
});
