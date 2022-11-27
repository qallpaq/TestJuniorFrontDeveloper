import { toDigit, toClientData } from '../utils';

describe('toDigit', () => {
  it('should return "01"', () => {
    expect(toDigit(1)).toEqual('01');
  });

  it('should return 10', () => {
    expect(toDigit(10)).toEqual(10);
  });

  it('should return 0.4', () => {
    expect(toDigit(0.4)).toEqual(0.4);
  });
});

describe('toClientData', () => {
  it('should return "00"', () => {
    expect(toClientData(true, 1)).toEqual('00');
  });

  it('should return "00"', () => {
    expect(toClientData(true, 69)).toEqual('00');
  });

  it('should return "00"', () => {
    expect(toClientData(true, 0.1)).toEqual('00');
  });

  it('should return "01"', () => {
    expect(toClientData(false, 1)).toEqual('01');
  });

  it('should return 69', () => {
    expect(toClientData(false, 69)).toEqual(69);
  });

  it('should return 0.1', () => {
    expect(toClientData(false, 0.1)).toEqual(0.1);
  });
});
