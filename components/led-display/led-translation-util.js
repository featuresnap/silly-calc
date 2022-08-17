const digitLookup = new Map([
    ['1', 'bc'],
    ['2', 'abdeg'],
    ['3', 'abcdg'],
    ['4', 'bcfg'],
    ['5', 'acdfg'],
    ['6', 'acdefg'],
    ['7', 'abc'],
    ['8', 'abcdefg'],
    ['9', 'abcfg'],
    ['0', 'abcdef'],
    ['a', 'abcefg'],
    ['b', 'cdefg'],
    ['c', 'adef'],
    ['d', 'bcdeg'], 
    ['e', 'abdefg'],
    ['f', 'aefg'],
    ['-', 'g'],
    ['.', 'h'], 
    ['E', 'adefg']
]);

/**
 * 
 * @param {string} expr 
 * @returns string 
 */
function toSegments(expr) {

    const subDigits = expr.split('');
    let segments = '';
 
    for(const subDigit of subDigits) {
        segments += digitLookup.get(subDigit) || '';
    }

    return segments;
}

export { toSegments };