// check the entry of all the elements in an array
export function isInArray(arr: any[], ...params): boolean {
  const isIncludetInArr = (param: any): boolean => arr.includes(param);
  return params.every(isIncludetInArr);
}

// get sum of all arguments
export function summator(...params: Array<string|number>): number {
  const reducer = (
    accumulator: string | number,
    currentValue: string | number,
    index: number): number => {
    if( typeof accumulator === 'string') {
      accumulator = parseInt(accumulator);
    }
    if( typeof currentValue === 'string') {
      currentValue = parseInt(currentValue);
    }
    return accumulator + currentValue;
  }
  return params.reduce<number>(reducer, 0);
}

// get an array of unique items of existing array
export function getUnique(arr: any[]): any[] {
  return Array.from(new Set(arr));
}

// reverse string
export function getReversedString(sentence: string): string {
  const regex = /^[a-zA-Z]+$/;
  const reversedSentenceArr: string[] = sentence.split(' ').map(word => {
    let protectedSymbols: {[key: number]: string} = {};
    // replace all symbols which are not a letter on "_" symbol
    let filteredWord = word.split('').filter((symb, index) => {
      if(!regex.test(symb)){
        protectedSymbols[index] = symb;
        return false;
      }
      return true;
    });
    // reverse filtered word
    filteredWord.reverse();
    // fill the gaps
    Object.entries(protectedSymbols).forEach(
      ([key, value]) => filteredWord.splice(parseInt(key), 0, value)
    );
    return filteredWord.join('');
  });
  return reversedSentenceArr.join(' ');
}
