import { toNth } from 'utils/string';

describe('toNth', () => {
  it('should get the correct result when the arg is number', () => {
    expect(toNth(1)).toEqual('1st.');
    expect(toNth(2)).toEqual('2nd.');
    expect(toNth(3)).toEqual('3rd.');
    expect(toNth(4)).toEqual('4th.');
    expect(toNth(11)).toEqual('11th.');
    expect(toNth(12)).toEqual('12th.');
    expect(toNth(13)).toEqual('13th.');
    expect(toNth(21)).toEqual('21st.');
    expect(toNth(22)).toEqual('22nd.');
    expect(toNth(23)).toEqual('23rd.');
    expect(toNth(24)).toEqual('24th.');
  });

  it('should get the correct result when the arg is string', () => {
    expect(toNth('1')).toEqual('1st.');
    expect(toNth('2')).toEqual('2nd.');
    expect(toNth('3')).toEqual('3rd.');
    expect(toNth('4')).toEqual('4th.');
    expect(toNth('11')).toEqual('11th.');
    expect(toNth('12')).toEqual('12th.');
    expect(toNth('13')).toEqual('13th.');
    expect(toNth('21')).toEqual('21st.');
    expect(toNth('22')).toEqual('22nd.');
    expect(toNth('23')).toEqual('23rd.');
    expect(toNth('24')).toEqual('24th.');
  });

  it('should get num when the arg is not an integer', () => {
    expect(toNth('u')).toEqual(null);
    expect(toNth(0)).toEqual(null);
    expect(toNth(-1)).toEqual(null);
    expect(toNth('0')).toEqual(null);
    expect(toNth('-1')).toEqual(null);
  });
});
