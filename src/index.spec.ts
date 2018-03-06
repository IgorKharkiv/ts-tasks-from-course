import * as testModule from './index';
import { parseString } from './index';

describe('isInArray', () => {
  it('should return true if all elements exist in the array', () => {
    const stubObj = {
      test: 'test',
    };
    const result = testModule.isInArray([stubObj, 'test', 10], stubObj, 'test', 10);
    expect(result).toBeTruthy();
  });

  it('should return false if one of elements does not exist in the array', () => {
    const stubObj = {
      test: 'test',
    };
    const result = testModule.isInArray([stubObj, 'test', 10], stubObj, 'test-failure', 10);
    expect(result).toBeFalsy();
  });
});

describe('summator', () => {
  it('should return summ of all arguments', () => {
    const result = testModule.summator('2',1,2,3,'4','1');
    expect(result).toEqual(13);
  })
})

describe('getUnique', () => {
  it('getUnique', () => {
    const stubArr = ['one', 'two', 'two', 'three', 'one', 'one', 'two', 'four', 'five', 'three', 'six'];
    const expextedString = 'one-two-three-four-five-six';
    const spy = jest.spyOn(testModule, 'getUnique');
    const result = testModule.getUnique(stubArr);
    expect(spy.mock.calls[0][0]).toEqual(stubArr);
    expect(result.length).toEqual(6);
    expect(result.join('-')).toEqual(expextedString);
  });
})

describe('getReversedString', () => {
  it('should return a reversed string where are all numbers and spec symbols will be on initial positions', () => {
    const testCase_1: string = 's1tar3t 2 hellow';
    const testCase_2: string = 's1ta$%r3t 2 hel^low';
    const testCase_3: string = 's1tar3t 2   low5';

    const result_1 = testModule.getReversedString(testCase_1);
    expect(result_1).toEqual('t1rat3s 2 wolleh');
    const result_2 = testModule.getReversedString(testCase_2);
    expect(result_2).toEqual('t1ra$%t3s 2 wol^leh');
    const result_3 = testModule.getReversedString(testCase_3);
    expect(result_3).toEqual('t1rat3s 2   wol5');
  });
});

describe('getReversedString', () => {
  it('azazazaz', () => {
    const result = testModule.parseString('zzzaabqqqwwweeeerrt');
    expect(result).toEqual('3z2a1b3q3w4e2r1t');
  });
});