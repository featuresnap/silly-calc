import { toDisplayChunks, toSegments } from '../../../components/led-display/led-translation-util';

describe('toDisplayChunks', () => {

    test('empty expression produces empty list', () => {
        expect(toDisplayChunks('')).toBeEmpty();
    });

    test('single digit is a single chunk', () => {
        expect(toDisplayChunks('1')).toEqual(['1']);
    });

    test('single digit preceding a decimal point is a single chunk', () => {
        expect(toDisplayChunks('2.')).toEqual(['2.']);
        expect(toDisplayChunks('b.')).toEqual(['b.']);
    });

    test('decimal point preceding a single digit is 2 chunks', () => {
        expect(toDisplayChunks('.3')).toEqual(['.', '3']);
        expect(toDisplayChunks('.c')).toEqual(['.', 'c']);
    });

    test('minus sign preceding or following a single digit is a separate chunk', () => {
        expect(toDisplayChunks('-5')).toEqual(['-', '5']);
        expect(toDisplayChunks('a-')).toEqual(['a', '-']);
    });

    test('Error flag', () => {
        expect(toDisplayChunks('E')).toEqual(['E']);
    });

    test('combined case - negatives, digits, decimal and exponential notation', () => {
        expect(toDisplayChunks('-5.67E-89')).toEqual(['-', '5.', '6', '7', 'E', '-','8', '9', ])
    });

    test('multi decimal sequence', () => {
        expect(toDisplayChunks('.1.2.')).toEqual(['.', '1.', '2.']);
        expect(toDisplayChunks('..4..')).toEqual(['.', '.', '4.', '.']);
    });


    // test('empty case', () => {});
    // test('empty case', () => {});
    // test('empty case', () => {});
    // test('empty case', () => {});
});
describe('toSegments', () => {
    test('empty expression translates to empty string', () => {
        const value = toSegments('');
        expect(value).toBeEmpty();
    });

    test('unrecognized value translates to empty string', () => {
        const value = toSegments('X');
        expect(value).toBeEmpty();
    });

    test('combine digit with decimal point', () => {
        const value = toSegments('1.');
        expect(value).toContainAllValues(['b', 'c', 'h']);
    });


    test('single character expressions translate to correct representation', () => {
        expect(toSegments('1')).toContainAllValues(['b', 'c']);
        expect(toSegments('2')).toContainAllValues(['a', 'b', 'd', 'e', 'g']);
        expect(toSegments('3')).toContainAllValues(['a', 'b', 'c', 'd', 'g']);
        expect(toSegments('4')).toContainAllValues(['b', 'c', 'f', 'g']);
        expect(toSegments('5')).toContainAllValues(['a', 'c', 'd', 'f', 'g']);
        expect(toSegments('6')).toContainAllValues(['a', 'c', 'd', 'e', 'f', 'g']);
        expect(toSegments('7')).toContainAllValues(['a', 'b', 'c']);
        expect(toSegments('8')).toContainAllValues(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
        expect(toSegments('9')).toContainAllValues(['a', 'b', 'c', 'f', 'g']);
        expect(toSegments('0')).toContainAllValues(['a', 'b', 'c', 'd', 'e', 'f']);
        expect(toSegments('a')).toContainAllValues(['a', 'b', 'c', 'e', 'f', 'g']);
        expect(toSegments('b')).toContainAllValues(['c', 'd', 'e', 'f', 'g']);
        expect(toSegments('c')).toContainAllValues(['a', 'd', 'e', 'f']);
        expect(toSegments('d')).toContainAllValues(['b', 'c', 'd', 'e', 'g']);
        expect(toSegments('e')).toContainAllValues(['a', 'b', 'd', 'e', 'f', 'g']);
        expect(toSegments('f')).toContainAllValues(['a', 'e', 'f', 'g']);
        expect(toSegments('-')).toContainAllValues(['g']);
        expect(toSegments('.')).toContainAllValues(['h']);
        expect(toSegments('E')).toContainAllValues(['a', 'd', 'e', 'f', 'g']);
    })
});

