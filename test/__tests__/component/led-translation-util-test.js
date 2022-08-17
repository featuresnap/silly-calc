import { toSegments} from '../../../components/led-display/led-translation-util';

test('empty expression translates to empty string', () => {
    const value = toSegments('');
    expect(value).toBeEmpty();
});

test('decimal point translates to decimal segment', () => {
    const value = toSegments('.');
    expect(value).toEqual('h');
});

test('translate 1 - digit only', () => {
    const value = toSegments('1');
    expect(value).toContainAllValues(['b', 'c']);
});

test('translate digit 1. - with decimal point', () => {
    const value = toSegments('1.');
    expect(value).toContainAllValues(['b', 'c', 'h']);
});

test('unrecognized value translates to empty string', () => {
    const value = toSegments('X');
    expect(value).toBeEmpty();
});
