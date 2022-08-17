const digitLookup = new Map([
    ['1', 'bc'],
    ['2', 'abdeg'],
    ['3', 'abcdg'],
    ['.', 'h']
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