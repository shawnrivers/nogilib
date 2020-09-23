import { getLocalizedNth } from 'client/i18n/utils';

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
